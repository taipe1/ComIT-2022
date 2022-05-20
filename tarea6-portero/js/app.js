
let piso = document.querySelector(".piso");
let dpto = document.querySelector(".dpto");

function mostrar(numero){
    let aux = piso.value.length + dpto.value.length;
    switch(aux){
        case 0: piso.value = numero;
        break
        case 1: piso.value += numero;
        break
        case 2: dpto.value = numero;
        break
    }
}

function reset(){
    formulario.reset();
}

function llamar(){
    let pantalla = document.querySelector('.salida');
    let pisoNuevo = parseInt(piso.value);
    let dptoNuevo = parseInt(dpto.value);
    if((pisoNuevo>=1 && pisoNuevo<=42)){
        if((dptoNuevo>=1 &&dptoNuevo<=8)){
            pantalla.value = `Llamando al piso ${pisoNuevo}, dpto ${dptoNuevo}`;
        }else{
            pantalla.value = `Marque un depto valido`;
        }
    }else{
        pantalla.value = `Marque un Piso valido`;
    }
}






