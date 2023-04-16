//player action js functionality
const gameStartTime = 360;
let time = gameStartTime;

//player names with ids and score variables
r1 = localStorage.getItem('r1');
r2 = localStorage.getItem('r2');
r3 = localStorage.getItem('r3');
r4 = localStorage.getItem('r4');
r5 = localStorage.getItem('r5');
r6 = localStorage.getItem('r6');
r7 = localStorage.getItem('r7');
r8 = localStorage.getItem('r8');
g1 = localStorage.getItem('g1');
g2 = localStorage.getItem('g2');
g3 = localStorage.getItem('g3');
g4 = localStorage.getItem('g4');
g5 = localStorage.getItem('g5');
g6 = localStorage.getItem('g6');
g7 = localStorage.getItem('g7');
g8 = localStorage.getItem('g8');
r1_s = 0;
r2_s = 0;
r3_s = 0;
r4_s = 0;
r5_s = 0;
r6_s = 0;
r7_s = 0;
r8_s = 0;
g1_s = 0;
g2_s = 0;
g3_s = 0;
g4_s = 0;
g5_s = 0;
g6_s = 0;
g7_s = 0;
g8_s = 0;
r_s = 0;
g_s = 0;
r1_id = localStorage.getItem('r1_id');
r2_id = localStorage.getItem('r2_id');
r3_id = localStorage.getItem('r3_id');
r4_id = localStorage.getItem('r4_id');
r5_id = localStorage.getItem('r5_id');
r6_id = localStorage.getItem('r6_id');
r7_id = localStorage.getItem('r7_id');
r8_id = localStorage.getItem('r8_id');
g1_id = localStorage.getItem('g1_id');
g2_id = localStorage.getItem('g2_id');
g3_id = localStorage.getItem('g3_id');
g4_id = localStorage.getItem('g4_id');
g5_id = localStorage.getItem('g5_id');
g6_id = localStorage.getItem('g6_id');
g7_id = localStorage.getItem('g7_id');
g8_id = localStorage.getItem('g8_id');

let rBlink, gBlink = false;

player_ids = [r1_id, r2_id, r3_id, r4_id, r5_id, r6_id, r7_id, r8_id,
					g1_id, g2_id, g3_id, g4_id, g5_id, g6_id, g7_id, g8_id,];

red_team = [r1, r2, r3, r4, r5, r6, r7, r8]
green_team = [g1, g2, g3, g4, g5, g6, g7, g8]

function logHit(player_X, player_Y){

  const playerX = (element) => element == player_X; 
  const playerY = (element) => element == player_Y;
  x = player_ids.findIndex(playerX);
  y = player_ids.findIndex(playerY);
	
  switch(x) {
		case 0: x_name = r1; break;
		case 1: x_name = r2; break;
		case 2: x_name = r3; break;
		case 3: x_name = r4; break;
		case 4: x_name = r5;	break;
		case 5: x_name = r6; break;
		case 6: x_name = r7; break;
		case 7: x_name = r8; break;
		case 8: x_name = g1; break;
		case 9: x_name = g2; break;
		case 10: x_name = g3; break;
		case 11: x_name = r4; break;
		case 12: x_name = r5; break;
		case 13: x_name = r6; break;
		case 14: x_name = r7; break;
		case 15: x_name = r8; break;
  }

  switch(y) {
		case 0: y_name = r1; break;
		case 1: y_name = r2; break;
		case 2: y_name = r3; break;
		case 3: y_name = r4; break;
		case 4: y_name = r5;	break;
		case 5: y_name = r6; break;
		case 6: y_name = r7; break;
		case 7: y_name = r8; break;
		case 8: y_name = g1; break;
		case 9: y_name = g2; break;
		case 10: y_name = g3; break;
		case 11: y_name = r4; break;
		case 12: y_name = r5; break;
		case 13: y_name = r6; break;
		case 14: y_name = r7; break;
		case 15: y_name = r8; break;
  }

  const newLine = document.createElement('span');
  for(i=0; i < red_team.length; i++){
    if(red_team[i] == x_name)
    newLine.style.color = '#ff0000'
  }

  for(i=0; i < green_team.length; i++){
    if(green_team[i] == x_name)
    newLine.style.color = '#008000'
  }
  
  newLine.innerText = `${x_name} hit ${y_name}`;
  const scoreListing = document.querySelector('.scorelisting');
  scoreListing.appendChild(newLine);

  // Limit the number of messages displayed
  const maxMessages = 10;
  const numMessages = scoreListing.children.length;
  if (numMessages > maxMessages) {
    scoreListing.removeChild(scoreListing.children[2]);
  }
}

function updatePlayerScores(player_id) {
  //Find matching player id to connect it to its corresponding player score
  const matchPlayer = (element) => element == player_id; 
  i = player_ids.findIndex(matchPlayer);
	
  switch(i) {
		case 0: r1_s += 10; break;
		case 1: r2_s += 10; break;
		case 2: r3_s += 10; break;
		case 3: r4_s += 10; break;
		case 4: r5_s += 10;	break;
		case 5: r6_s += 10; break;
		case 6: r7_s += 10; break;
		case 7: r8_s += 10; break;
		case 8: g1_s += 10; break;
		case 9: g2_s += 10; break;
		case 10: g3_s += 10; break;
		case 11: g4_s += 10; break;
		case 12: g5_s += 10; break;
		case 13: g6_s += 10; break;
		case 14: g7_s += 10; break;
		case 15: g8_s += 10; break;
  }
  updateTeamScores();
}

function updateTeamScores() {
  r_s = r1_s + r2_s + r3_s + r4_s + r5_s + r6_s + r7_s + r8_s;
  g_s = g1_s + g2_s + g3_s + g4_s + g5_s + g6_s + g7_s + g8_s;
  updateHighScore();
  loadPlayers();
}

function updateHighScore() {
  if (r_s > g_s && !rBlink) {
	document.getElementById("r-s").classList.toggle("blink"); 
    rBlink = true; 
	if (gBlink) {
	   document.getElementById("g-s").classList.toggle("blink");
       gBlink = false; }}
  if (g_s > r_s && !gBlink) {
	document.getElementById("g-s").classList.toggle("blink");
	gBlink = true; 
	if (rBlink) {
	   document.getElementById("r-s").classList.toggle("blink"); 
       rBlink = false; }}
}

function updateCountdownTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds.toString().length < 2)
	seconds = '0' + seconds;
  if (time > 0) {
    time--;
    document.getElementById('time-remaining').innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  } else document.getElementById('time-remaining').innerHTML = 'Game Over';
}

document.getElementById('teams').addEventListener('load', loadPlayers());

setInterval(updateCountdownTimer, 1000);

function loadPlayers() {
  document.getElementById('g1-n').innerHTML = g1;
  document.getElementById('g2-n').innerHTML = g2;
  document.getElementById('g3-n').innerHTML = g3;
  document.getElementById('g4-n').innerHTML = g4;
  document.getElementById('g5-n').innerHTML = g5;
  document.getElementById('g6-n').innerHTML = g6;
  document.getElementById('g7-n').innerHTML = g7;
  document.getElementById('g8-n').innerHTML = g8;

  if(g1!=null)
    document.getElementById('g1-s').innerHTML = g1_s;
  if(g2!=null)
    document.getElementById('g2-s').innerHTML = g2_s;
  if(g3!=null)
    document.getElementById('g3-s').innerHTML = g3_s;
  if(g4!=null)
    document.getElementById('g4-s').innerHTML = g4_s;
  if(g5!=null)
    document.getElementById('g5-s').innerHTML = g5_s;
  if(g6!=null)
    document.getElementById('g6-s').innerHTML = g6_s;
  if(g7!=null)
    document.getElementById('g7-s').innerHTML = g7_s;
  if(g8!=null)
    document.getElementById('g8-s').innerHTML = g8_s;
  document.getElementById('g-s').innerHTML = g_s;

  document.getElementById('r1-n').innerHTML = r1;
  document.getElementById('r2-n').innerHTML = r2;
  document.getElementById('r3-n').innerHTML = r3;
  document.getElementById('r4-n').innerHTML = r4;
  document.getElementById('r5-n').innerHTML = r5;
  document.getElementById('r6-n').innerHTML = r6;
  document.getElementById('r7-n').innerHTML = r7;
  document.getElementById('r8-n').innerHTML = r8;

  if(r1!=null)
    document.getElementById('r1-s').innerHTML = r1_s;
  if(r2!=null)
    document.getElementById('r2-s').innerHTML = r2_s;
  if(r3!=null)
    document.getElementById('r3-s').innerHTML = r3_s;
  if(r4!=null)
    document.getElementById('r4-s').innerHTML = r4_s;
  if(r5!=null)
    document.getElementById('r5-s').innerHTML = r5_s;
  if(r6!=null)
    document.getElementById('r6-s').innerHTML = r6_s;
  if(r7!=null)
    document.getElementById('r7-s').innerHTML = r7_s;
  if(r8!=null)
    document.getElementById('r8-s').innerHTML = r8_s;
  document.getElementById('r-s').innerHTML = r_s;
}

// music track selector
let tracks = [
  './assets/music_tracks/Track01.mp3',
  './assets/music_tracks/Track02.mp3',
  './assets/music_tracks/Track03.mp3',
  './assets/music_tracks/Track04.mp3',
  './assets/music_tracks/Track05.mp3',
  './assets/music_tracks/Track06.mp3',
  './assets/music_tracks/Track07.mp3',
  './assets/music_tracks/Track08.mp3',
];

document.addEventListener(
  'click',
  function () {
    const audio = document.querySelector('audio');
    let randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    audio.src = randomTrack;
    audio.volume = 0.2;
    audio.play();
  },
  { once: true }
);