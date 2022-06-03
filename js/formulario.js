const d = document;
const elementos = d.querySelectorAll('[data-guardar="true"]');

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

    elementos.forEach(elemento => {
        let data = elemento.dataset;

        if (data.guardar) {
            let valor = elemento.value;

            if (!valor) {
                alert(`El campo ${data.label} no puede ir vacío`);
                elemento.focus();
            }
        }
    });
}