// // var WebSocket = require('websocket').client;
// var PORT = 7501 ;
// var HOST = '127.0.0.1';
// var connection = new WebSocket('ws://' + HOST + ':' + PORT);

// // connection.onopen = function () {
// //     connection.send('Ping'); // Send the message 'Ping' to the server
// //   };

// connection.onmessage = function (e) {
//   console.log(e.data);
// }; 

var client = new WebSocket('ws://127.0.0.1:7501/');

client.onOpen = function(){
  console.log("connected");
  client.send("hello browserClient")
};

client.onerror = function (error) {
  console.log('WebSocket Error ' + error['data']);
  };
  
  // Log messages from the server
client.onmessage = function (e) {
    console.log('Server: ' + e['data']);
  };
