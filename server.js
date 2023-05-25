const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (mes) {
        io.emit('chat message', mes);
    });
});


http.listen(0808, function () {
    console.log('Listening to port 0808');
});
