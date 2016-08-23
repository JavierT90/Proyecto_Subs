$(function() {
    var socket = io();
    $("#btn").click(function()
            {
              var parametros={text:"hello world",from:"en",to:"es"}
              socket.emit('traducir',parametros);
            });
    socket.on('traducido', function (data) {
        console.log(data);
      });
});
