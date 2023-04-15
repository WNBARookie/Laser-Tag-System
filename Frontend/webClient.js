
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
  const newLine = document.createElement('span');
  newLine.innerText = `Player ${playerX} hit Player ${playerY}`;
  const scoreListing = document.querySelector('.scorelisting');
  scoreListing.appendChild(newLine);
  
  // Limit the number of messages displayed
  const maxMessages = 10;
  const numMessages = scoreListing.children.length;
  if (numMessages > maxMessages) {
    scoreListing.removeChild(scoreListing.children[2]);
  }
  //updatePlayerScores(`${playerX}`);
};

