const d = document;

crearLabel();

function crearLabel() {
    let elementos = d.querySelectorAll('[data-formulario="formulario"]');

    elementos.forEach(elemento => {
        let data = elemento.dataset;
        let label = d.createElement('label');
        let padre = elemento.parentElement;

        label.htmlFor = elemento.id;
        label.innerHTML = data.label;

        // console.log();

        padre.prepend(label);
        // d.getElementById(elemento.id).prepend(label);
    });
}