
$(document).ready(function () {
    let resultadoId = 0;
    let cantVotos = 0;
    let resultadoOperado = 0;
    // metodo mouseover 
    $('.infoImg').on('mouseover', function(){
        elId = this.id;
        obtenervalor(elId);
    });
    // metodo mouseout
    $('.infoImg').mouseout(function () { 
        imgdefabrica();
    });
    // metodo click
   $('.infoImg').on('click', function () {
       calificacionImg(elId);
       calcularValoracion(elId);
       llamarMouseOut();
   });


   //FUNCIONES A UTILIZAR----------------------------
   function imgdefabrica(){
     for(let i=1; i<= 5; i++){
        $('#'+i).attr('src', './img/vacia.png');
     }
   }
   function calificacionImg(elId){
    for(let i=1; i<= elId; i++){
        $('#'+i).attr('src', './img/lleno.png');
    }
   }
   function calcularValoracion(elId){
       resultadoId +=parseInt(elId);
       cantVotos +=1;
       resultadoOperado = (Math.floor((resultadoId/cantVotos)*2))/2;
       $('#calculador').html(resultadoOperado);
   }
   function obtenervalor(valor){
    for(let i=1; i<= valor; i++){
        $('#'+i).attr("src",'./img/final.png');
    }
   }
   function llamarMouseOut(){
    let auxiliar = Math.floor(resultadoOperado);
    $('.infoImg').mouseout(function () { 
        imgdefabrica();
        if(resultadoOperado%1 === 0){
            calificacionImg(resultadoOperado);
        }
        else{
            calificacionImg(auxiliar);
            $('#'+(auxiliar+1)).attr('src', './img/mitad.png');
        }
        
        // let entero = (resultadoOperado%1 === 0)? 
        //                 calificacionImg(resultadoOperado):
        //                 (calificacionImg(Math.floor(resultadoOperado))).
        //                 $('#'+(Math.floor(resultadoOperado)+1)).attr('src', './img/mitad.png');
    });
   }

});



















