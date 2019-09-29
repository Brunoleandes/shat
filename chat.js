//Pega as variáveis do .env para process.env
require('dotenv').config();

const WebSocket = require('ws');
const username = process.env.USERNAME;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const wsc = new WebSocket('ws://' + process.env.SRVIP);

function clearShell(){
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

function CLI(params) {
    readline.question(username + '>', function (input) {
        wsc.send(input);
        CLI();
    });
}

wsc.on('open', function (params) {
    clearShell();
    readline.write('\nVocê foi conectado\n');   
    CLI(); 
    
})

wsc.on('message', function (msg) {
    readline.close();
    console.log('\n<: ' + msg);
    CLI();
})
