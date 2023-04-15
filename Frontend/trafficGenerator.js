const WebSocket = require("ws");
const prompt = require("prompt-sync")();

var client = new WebSocket("ws://127.0.0.1:7501/");

client.onopen = function(){
	
console.log("this program will generate some test traffic for 2 players on the red ")
console.log("team as well as 2 players on the green team")
console.log("")

var red1 = prompt("Enter id of red player 1 ==> ")
var red2 = prompt("Enter id of red player 2 ==> ")
var green1 = prompt("Enter id of green player 1 ==> ")
var green2 = prompt("Enter id of green player 2 ==> ")

console.log("")
counter = prompt("How many events do you want ==> ")
var i = 1
function loop(){
  setTimeout(function(){
	if (Math.floor(Math.random() * 2)+1 == 1)
		redplayer = red1
	else
		redplayer = red2

	if (Math.floor(Math.random() * 2)+1 == 1)
		greenplayer = green1
	else
		greenplayer = green2	

	if (Math.floor(Math.random() * 2)+1 == 1)
		message = redplayer + ":" + greenplayer
	else
		message = greenplayer + ":" + redplayer

	console.log(message)
	i+=1;
	client.send(message.toString())
  if(i <= counter){
    loop();
  }else{
    console.log("program complete")
    client.close()
  }
  }, Math.floor(Math.random() * 2000)+1)
}

loop();

}

client.onerror = function (error) {
  console.log('WebSocket Error ' + error);
  };

