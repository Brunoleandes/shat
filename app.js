require('dotenv').config();

const WebSocket = require('ws');

const express = require('express');

const http = require('http');

const app = express();

app.get('/',function (req,res) {
    res.status(200);
    res.send('Hello World')
})

//Cria o servidor HTTP
const httpServer = new http.Server(app)

httpServer.listen(process.env.PORT,function (params) {
    console.log('Servidor rondando em: http://localhost:'+process.env.PORT);
})
