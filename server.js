/**
 * Created with JetBrains WebStorm.
 * User: Chris
 * Date: 8/3/12
 * Time: 7:21 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express'),
    server = express();

server.use('/', express.static(__dirname + '/') );

server.get('/', function(req,res){
    res.sendfile('index.html');
    console.log('Sent index.html');
});

server.get('/api/hello', function(req,res){
    res.send('Hello Cruel World');
});
server.listen(process.env.PORT || 3000);