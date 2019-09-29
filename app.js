require('dotenv').config();

const WebSocket = require('ws');

const express = require('express');

const http = require('http');

const app = express();



//Cria o servidor HTTP
const httpServer = new http.Server()

const wss = new WebSocket.Server({ server: httpServer });

function broadcast(msg) {
    wss.clients.forEach( client =>{
        client.send(msg)
    })
}

wss.on('connection',function (client) {
    broadcast("Novo usuario na sala.");
    
    client.on('message',function (msg) {
        broadcast(msg)
    })

})


httpServer.listen(process.env.PORT,function (params) {
    console.log('Servidor rondando em: http://localhost:'+process.env.PORT);
})
