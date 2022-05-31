
let pantalla = document.getElementById('pantalla')
let linea1 = 'qwertyuiop';
let linea2 = 'asdfghjklñ';
let linea3 = 'zxcvbnm,.-';

for(let ite of linea1){
    document.write('<input type="button" class="boton" value="'+ite+'" onclick="muestra(this.value)" style="padding:8px 12px">')
}

for(let ite of linea2){
    document.write('<input type="button" class="boton" value="'+ite+'" onclick="muestra(this.value)" style="padding:8px 12px">')
}

for(let ite of linea3){
    document.write('<input type="button" class="boton" value="'+ite+'" onclick="muestra(this.value)" style="padding:8px 12px">')
}

document.write('<input type="button" class="boton" value="espacio" onclick="espacio()" style="padding:8px 12px">')

document.write('<input type="button" class="boton" value="limpiar" onclick="borrar()" style="padding:8px 12px">')

function muestra(digito){
    pantalla.value +=digito;
}

function borrar(){
    pantalla.value = "";
}

function espacio(digito){
    pantalla.value +=" ";
}




