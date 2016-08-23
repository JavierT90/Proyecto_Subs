var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');
var exec = require('child_process').exec;
var execSync = require('exec-sync');
var MsTranslator = require('mstranslator');

server.listen(8080);
var client = new MsTranslator({
        client_id: "772661829323321212",
        client_secret: "gepZTKt3yjyLCW0uqRkYOA1+BhEip/eKtaVNdo8n2Uk="
    }, true);

app.get('/',
    function(req,res)
    {
        res.sendFile("/home/ricky/proyectoanalisis/Proyecto_Subs/Proyecto_Subs/cliente.html");
    }
);

app.get('/socket.io-1.3.5.js',
    function(req,res)
    {
        res.sendFile("/home/ricky/proyectoanalisis/Proyecto_Subs/Proyecto_Subs/socket.io-1.3.5.js");
    }
);

app.get('/scripts.js',
    function(req,res)
    {
        res.sendFile("/home/ricky/proyectoanalisis/Proyecto_Subs/Proyecto_Subs/scripts.js");
    }
);
app.get('/traducir',
  function sendResponse(req,res)
  {
    var query={text:req.query.texto,
                from:req.query.idiomaorigen,
              to:req.query.idiomadestino}

    Traducir(query,function(Respuesta){
        res.status(200).send(Respuesta);
    });
  }
);

function Traducir(query,callback)
{
  console.log("Funcion Traducir");

    client.translate(query , function(err,data)
    {
      if(err)
      {
        console.log(err);
        callback(err);
      }
      else
      {
        callback(data.toLowerCase());
      }
    });
}

function traduccion(texto , origen , destino)
{
  var params = {
              text: texto,
              from: origen,
              to: destino
          };
}

io.on('connection', function (socket) {
  socket.on('traducir', function(data){
      console.log(data);
      client.translate(data , function(err,data)
      {
        if(err)
        {
          console.log(err);
        }
        else
        {
          socket.emit("traducido",data);
        }
      });

    });
});
