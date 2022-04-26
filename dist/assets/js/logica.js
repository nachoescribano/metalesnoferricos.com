function expandirTabla(boton, contenedor) {
    //alert('hola mundo');
    let botonExpandirContraer = document.getElementById(boton)
    let contenedorExpandible = document.getElementById(contenedor)

        if (contenedorExpandible.classList.contains('container'))
        {
            contenedorExpandible.classList.remove('container');
            //console.log(contenedor1);
            contenedorExpandible.classList.add('container-fluid');
            botonExpandirContraer.src='assets/img/arrows-angle-contract.svg';
        }
        
        else
        {
            contenedorExpandible.classList.remove('container-fluid');
            contenedorExpandible.classList.add('container');
            botonExpandirContraer.src='assets/img/arrows-angle-expand.svg';
        }
}




