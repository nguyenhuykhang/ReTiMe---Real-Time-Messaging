var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var path = require('path')

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
    console.log('User Online');
    
    socket.on('message', (msg) => {
      console.log('message: ' + msg);
      socket.broadcast.emit('message-from-others', msg);
    });
    
  });

app.use(express.static(path.join(__dirname, 'public')))

var serverPort = process.env.PORT || 3000
http.listen(serverPort)