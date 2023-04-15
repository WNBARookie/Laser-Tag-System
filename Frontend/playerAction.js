//player action js functionality
const gameStartTime = 360;
let time = gameStartTime;

//players and score variables
r1 = localStorage.getItem('r1');
r1_id = localStorage.getItem('r1_id');
r2 = localStorage.getItem('r2');
r2_id = localStorage.getItem('r2_id');
r3 = localStorage.getItem('r3');
r3_id = localStorage.getItem('r3_id');
r4 = localStorage.getItem('r4');
r4_id = localStorage.getItem('r4_id');
r5 = localStorage.getItem('r5');
r5_id = localStorage.getItem('r5_id');
r6 = localStorage.getItem('r6');
r6_id = localStorage.getItem('r6_id');
r7 = localStorage.getItem('r7');
r7_id = localStorage.getItem('r7_id');
r8 = localStorage.getItem('r8');
r8_id = localStorage.getItem('r8_id');
g1 = localStorage.getItem('g1');
g1_id = localStorage.getItem('g1_id');
g2 = localStorage.getItem('g2');
g2_id = localStorage.getItem('g2_id');
g3 = localStorage.getItem('g3');
g3_id = localStorage.getItem('g3_id');
g4 = localStorage.getItem('g4');
g4_id = localStorage.getItem('g4_id');
g5 = localStorage.getItem('g5');
g5_id = localStorage.getItem('g5_id');
g6 = localStorage.getItem('g6');
g6_id = localStorage.getItem('g6_id');
g7 = localStorage.getItem('g7');
g7_id = localStorage.getItem('g7_id');
g8 = localStorage.getItem('g8');
g8_id = localStorage.getItem('g8_id');
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

console.log("test");

function updatePlayerScores(player_id) {
	console.log('Player ID: ' + player_id);
	updateTeamScores();
}

function updateTeamScores() {
	console.log("test2");
}

function updateCountdownTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds.toString().length < 2)
	seconds = '0' + seconds
  if (time > 0) {
    time--;
    document.getElementById('time-remaining').innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  } else document.getElementById('time-remaining').innerHTML = 'Game Over';
}

document.getElementById('teams').addEventListener('load', loadPlayers());

setInterval(updateCountdownTimer, 750);

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