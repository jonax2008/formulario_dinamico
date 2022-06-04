const d = document;
const elementos = d.querySelectorAll('[data-guardar="true"]');
const formulario = d.querySelector('#formulario');

formulario.onsubmit = () =>{
    return validarFormulario();
}
crearLabel();

function crearLabel() {
    elementos.forEach(elemento => {
        let data = elemento.dataset;
        let label = d.createElement('label');
        let padre = elemento.parentElement;

        label.htmlFor = elemento.id;
        label.innerHTML = elemento.type == 'radio' ? elemento.value : data.label;
        padre.prepend(label);
    });
}

function validarFormulario() {
    let valido = true;
    elementos.forEach(elemento => {
        if (valido) {
            let data = elemento.dataset;
            if (data.guardar) {
                let valor = elemento.value;

                switch (data.tipo) {
                    case 'select':
                        if (valor == '0') {
                            valido = false;
                            elemento.focus();
                        }
                        break;
                    case 'radio':
                        let inputRadio = d.querySelectorAll('[type="radio"]');
                        let checked = false;
                        inputRadio.forEach(radio => {
                            if (radio.checked) {
                                checked = true;
                            }
                        });
                        if (!checked) {
                            valido = false;
                        }
                        break;
                    default:
                        if (!valor) {
                            valido = false;
                        }
                        break;
                }

                if (!valido) {
                    alert(`El campo ${data.label} no puede ir vacío`);
                    elemento.focus();
                }
            }
        }
    });
    return valido;
}