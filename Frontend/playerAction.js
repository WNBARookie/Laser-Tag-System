//player action js functionality
const gameStartTime = 30;
let time = gameStartTime;

//players and score variables
r1 = localStorage.getItem("r1");
r2 = localStorage.getItem("r2");
r3 = localStorage.getItem("r3");
r4 = localStorage.getItem("r4");
r5 = localStorage.getItem("r5");
r6 = localStorage.getItem("r6");
r7 = localStorage.getItem("r7");
r8 = localStorage.getItem("r8");
g1 = localStorage.getItem("g1");
g2 = localStorage.getItem("g2");
g3 = localStorage.getItem("g3");
g4 = localStorage.getItem("g4");
g5 = localStorage.getItem("g5");
g6 = localStorage.getItem("g6");
g7 = localStorage.getItem("g7");
g8 = localStorage.getItem("g8");
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

function updateCountdownTimer() {
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
    if(time>0) {
      time--;
      document.getElementById('time-remaining').innerHTML = `Time Remaining: ${time}`;
    }
    else 
      document.getElementById('time-remaining').innerHTML = 'Game Over';
}
document.getElementById("teams").addEventListener("load", loadPlayers());
setInterval(updateCountdownTimer, 750);
function loadPlayers() {

  document.getElementById("g1-n").innerHTML = g1;
  document.getElementById("g2-n").innerHTML = g2;
  document.getElementById("g3-n").innerHTML = g3;
  document.getElementById("g4-n").innerHTML = g4;
  document.getElementById("g5-n").innerHTML = g5;
  document.getElementById("g6-n").innerHTML = g6;
  document.getElementById("g7-n").innerHTML = g7;
  document.getElementById("g8-n").innerHTML = g8;
  document.getElementById("g1-s").innerHTML = g1_s;
  document.getElementById("g2-s").innerHTML = g2_s;
  document.getElementById("g3-s").innerHTML = g3_s;
  document.getElementById("g4-s").innerHTML = g4_s;
  document.getElementById("g5-s").innerHTML = g5_s;
  document.getElementById("g6-s").innerHTML = g6_s;
  document.getElementById("g7-s").innerHTML = g7_s;
  document.getElementById("g8-s").innerHTML = g8_s;
  document.getElementById("g-s").innerHTML = g_s;

  document.getElementById("r1-n").innerHTML = r1;
  document.getElementById("r2-n").innerHTML = r2;
  document.getElementById("r3-n").innerHTML = r3;
  document.getElementById("r4-n").innerHTML = r4;
  document.getElementById("r5-n").innerHTML = r5;
  document.getElementById("r6-n").innerHTML = r6;
  document.getElementById("r7-n").innerHTML = r7;
  document.getElementById("r8-n").innerHTML = r8;
  document.getElementById("r1-s").innerHTML = r1_s;
  document.getElementById("r2-s").innerHTML = r2_s;
  document.getElementById("r3-s").innerHTML = r3_s;
  document.getElementById("r4-s").innerHTML = r4_s;
  document.getElementById("r5-s").innerHTML = r5_s;
  document.getElementById("r6-s").innerHTML = r6_s;
  document.getElementById("r7-s").innerHTML = r7_s;
  document.getElementById("r8-s").innerHTML = r8_s;
  document.getElementById("r-s").innerHTML = r_s;
}