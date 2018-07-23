const { io } = require('../server');

io.on('connection', (client)=>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // escuhar
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) =>{
        if(mensaje.usuario){
            callback({
                respuesta: 'TODO SALIO BIEN!'
            });
        }else{
            callback({
                respuesta: 'TODO SALIO MAL!!!!!!'
            });
        }
    });

});