/**
 * Created with JetBrains WebStorm.
 * User: Chris
 * Date: 8/3/12
 * Time: 7:21 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express'),
    server = express(),
    app = server.listen(3000),
    io = require('socket.io');

var sockets = io.listen(app);

server.use('/', express.static(__dirname + '/') );

server.get('/', function(req,res){
    res.sendfile('index.html');
    console.log('Sent index.html');
});

server.get('/api/hello', function(req,res){
    res.send('Hello World');
});

interval = setInterval(function () {
    update();
},1000/30);

function update() {

    //console.log('update called');
    sockets.sockets.emit('update', "update!");

};


sockets.on('connection', function (socket) {
    socket.broadcast.emit('broadcast: user connected!');
    console.log('log: user connected');
});