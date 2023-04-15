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
  const [playerX, playerY] = e.data.split(':');
  logHit(`${playerX}`, `${playerY}`)
  updatePlayerScores(`${playerX}`);
};

