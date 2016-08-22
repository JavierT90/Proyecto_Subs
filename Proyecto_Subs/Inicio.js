var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');
var exec = require('child_process').exec;
var execSync = require('exec-sync');


server.listen(8080);

app.get('/',
    function(req,res)
    {
        res.sendFile("/home/ricky/proyectoanalisis/Proyecto_Subs/Proyecto_Subs/Inicio.html");
    }
);
app.get('/traducir',
  function sendResponse(req,res)
  {
    console.log(req.query.texto);
    console.log(req.query.idiomaorigen);
    console.log(req.query.idiomadestino);
    res.status(200).send('hola mundo');
  }
);
