
let pantalla = document.getElementById('pantalla');
let arreglo = [];

function mostrar(num){
    pantalla.value += num;
    arreglo.push(num);
    
}

function signo(sig){
    arreglo.push(sig);
    pantalla.value = "";
}

function igual(){
    pantalla.value = "";
    let cade = '';
    for(let aux of arreglo){
        cade = cade + aux;
    }
    pantalla.value = eval(cade);
}

function limpiar(){
    pantalla.value = "";
    arreglo = [];
}