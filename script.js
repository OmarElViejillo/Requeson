$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

// Validado Nombre ==============================
        if( $('#name').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#name').css("border-bottom-color", "#F14B4B")
        } else{
            $('#name').css("border-bottom-color", "#d1d1d1")
        }

   // Validado Apellido ==============================
        if( $('#lastname').val() == '' ){
            errores += '<p>Escriba un apellido</p>';
            $('#lastname').css("border-bottom-color", "#F14B4B")
        } else{
            $('lastname').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Telefono ==============================
        if( $('#phone').val() == '' ){
            errores += '<p>Escriba un telefono</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Tarjeta ==============================
        if( $('#card').val() == '' ){
            errores += '<p>Escriba una tarjeta</p>';
            $('#card').css("border-bottom-color", "#F14B4B")
        } else{
            $('#card').css("border-bottom-color", "#d1d1d1")
        }

	// Validado Codigo ==============================
        if( $('#cod').val() == '' ){
            errores += '<p>Escriba un codigo</p>';
            $('#cod').css("border-bottom-color", "#F14B4B")
        } else{
            $('#cod').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
