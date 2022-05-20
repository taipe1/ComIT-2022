
// // tarea 1
// var numero = 10;
// numero = numero + 5;
// console.log(numero)

// var cadena1 = "casita";
// var cadena2 = "pequeña";
// var concatenacion = cadena1 +" "+ cadena2;
// console.log(concatenacion);

// tarea 3
    //solicitar la variable al usuario y convertirla a entero
    // grupo1 = parseInt(prompt("ingrese por favor un numero"))
    // switch(grupo1) {
	// 	case (1 || 2 || 3):
	// 		console.log("grupo 1");
	// 		break
	// 	case (4 || 5 || 6):
	// 		console.log("grupo 2");
	// 		break
	// 	case (7 || 8 || 9 || 10 ):
	// 		console.log("grupo 3");
	// 		break
	// 	default:
	// 		console.log("el numero: "+ grupo1 +" no pertenece a ningun grupo")
	// } 

// tarea 4
// realizar sumatoria
//realizar la sumatoria entre 0 y 10
// var sumador = 0;

// for(var i=0;i<=1000;i++){
//     sumador = sumador + i;
// }
// console.log("la suma es: " + sumador)


// crea una funcion que reciba dos valores
function numMayor(numero1, numero2){
    if(numero1 > numero2){
        console.log("el mayor es: "+ numero1);
    }else{
        console.log("el mayor es: "+ numero2);
    }
}
numMayor(3,9);

// concatenar
function concatenar(cadena1, cadena2){
    console.log("concatenando: "+ cadena1 + cadena2);
}
concatenar("hola","mundo");

// funcion con asteriscos
function asteriscos(num){
    var cadena = '';
    for(var i=0;i<5;i++){
        cadena = cadena + '*'
    }
    console.log("la cadena de asteriscos es: "+ cadena);
}
asteriscos(5);














































