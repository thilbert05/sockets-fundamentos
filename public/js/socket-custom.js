const socket = io();

//on escuchan sucesos
socket.on('connect', function() {
  console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {
  console.log('Se perdió conexión con el servidor');
})

//Emit se usan para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Tomas',
    mensaje: 'Hola Mundo'
  }, function (resp) {
    console.log('Respuesta del Servidor:', resp);
  });

socket.on('enviarMensaje', function(mensaje) {
  console.log('Servidor:', mensaje);
});