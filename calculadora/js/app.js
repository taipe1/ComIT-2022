
let pantalla = document.getElementById('pantalla');
let cadena = "";

function mostrar(num){
    pantalla.value += num;
    cadena = cadena + String(num);
}

function signo(sig){
    cadena = cadena + String(sig);
    pantalla.value = "";
}

function igual(){
    pantalla.value = "";
    pantalla.value = eval(cadena);
}

function limpiar(){
    pantalla.value = "";
    cadena = "";
}