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
        res.sendFile("/home/ricky/proyectoanalisis/Proyecto_Subs/Proyecto_Subs/Inicio.html");
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
        callback("nel chavo");
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
