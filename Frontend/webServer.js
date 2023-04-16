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