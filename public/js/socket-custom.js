var socket = io();

// escuhar
socket.on('connect', function(){
    console.log('conectado al servidor');
});

// escuhar
socket.on('disconnect', function(){
    console.log('perdimos conexion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'David',
    mensaje: 'Hola Mundo'
}, function( respuesta ){
    console.log('Respuesta server: ', respuesta);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});  