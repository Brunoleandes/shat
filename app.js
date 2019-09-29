require('dotenv').config();

const WebSocket = require('ws');

const express = require('express');

const http = require('http');

const app = express();



//Cria o servidor HTTP
const httpServer = new http.Server()

const wss = new WebSocket.Server({ server: httpServer });


wss.on('connection',function (client) {
    
    client.on('message',function (msg) {
        console.log(msg)
    })

})


httpServer.listen(process.env.PORT,function (params) {
    console.log('Servidor rondando em: http://localhost:'+process.env.PORT);
})
