
$(document).ready(function () {
    $('#btn1').on('click',boton1);
    $('#btn2').on('click',boton2);
    $('#btn3').on('click',boton3);
    $('#btn4').on('click',boton4);

    function boton1() {
        if($('#btn1').hasClass('cambiarVerde')){
            $('#btn1').removeClass('cambiarVerde');
            $('#btn1').addClass('cambiarRojo');
            $('#btn1').val('cambiar a verde');
        }else{
            $('#btn1').removeClass('cambiarRojo');
            $('#btn1').addClass('cambiarVerde');
            $('#btn1').val('cambiar a rojo');
        }
    }
   function boton3() {
       if($('#btn3').hasClass('cambiarAzul')){
           $('#btn3').removeClass('cambiarAzul');
           $('#btn3').addClass('cambiarVerde');
           $('#btn3').val('cambiar a azul');
       }else{
           $('#btn3').removeClass('cambiarVerde');
           $('#btn3').addClass('cambiarAzul');
           $('#btn3').val('cambiar a verde');
       }
   }
   function boton2() {
       if($('#btn2').hasClass('cambiarRojo')){
           $('#btn2').removeClass('cambiarRojo');
           $('#btn2').addClass('cambiarAmarillo');
           $('#btn2').val('cambiar a rojo');
       }else{
           $('#btn2').removeClass('cambiarAmarillo');
           $('#btn2').addClass('cambiarRojo');
           $('#btn2').val('cambiar a amarillo');
       }
   }
   function boton4() {
    if($('.container').hasClass('cambiarNegro')){
        $('.container').removeClass('cambiarNegro');
        $('#btn4').val('cambiar a fondo negro');
    }else{
        $('.container').addClass('cambiarNegro');
        $('#btn4').css('color', 'white');
        $('#btn4').val('cambiar a fondo plomo');
    }
}
});
















