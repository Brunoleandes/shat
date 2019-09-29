const WebSocket = require('ws');
const username = process.env.USERNAME;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(username + ' Digite o endereço do server', function (input) {
    const wsc = new WebSocket('ws://' + input);

    wsc.on('open', () => console.log('Conectado ao servidor'));
    
    wsc.on('message', function (msg) {
        console.log('Mensagem recebida: ' + msg)
    })




    function CLI(params) {
        readline.question(username + '>', function (input) {
            wsc.send(input);
            CLI();
        });
    }
    CLI();
});