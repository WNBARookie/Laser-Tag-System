// var WebSocket = require('ws');
// var http = require('http');
// var PORT = 7501 ;
// var portOut = 7500;
// var HOST = '127.0.0.1';

// var server = new WebSocket.Server({port: PORT, host: HOST});
// var server2 = new WebSocket.Server({port: portOut, host: HOST});

// server.on('connection', (stream) => {
//     server2.on('connection', (out) =>{
//         stream.on('message', (data) => {
//             console.log(data.toString())
//             out.send(data.toString())
//         })
//     })
// })

const WebSocket = require('ws');
const server = new WebSocket.Server({
  port: 7501,
  host: '127.0.0.1'
});

let sockets = [];
server.on('connection', function(socket) {
  sockets.push(socket);

  // When you receive a message, send that message to every socket.
  socket.on('message', function(msg) {
    console.log(msg.toString())
    sockets.forEach(s => s.send(msg.toString()));
  });

  // When a socket closes, or disconnects, remove it from the array.
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
  });
});