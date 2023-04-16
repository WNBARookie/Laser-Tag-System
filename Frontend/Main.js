// -- Splash Screen
const splash = document.querySelector('.splash-screen');
const start = document.querySelector('.start-button');

const startGameTime = 30;
let time = startGameTime;


let timerRunning = false;

localStorage.clear();
r1 = null;
r2 = null;
r3 = null;
r4 = null;
r5 = null;
r6 = null;
r7 = null;
r8 = null;

g1 = null;
g2 = null;
g3 = null;
g4 = null;
g5 = null;
g6 = null;
g7 = null;
g8 = null;

// starting splash fade out animation after 3 seconds
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('fade-out');
  }, 3000);
});

// hiding splash screen after 4 seconds
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('none');
  }, 4000);
});

// -- HTTP request
var xhr = null;
getXmlHttpRequestObject = function () {
  if (!xhr) {
    // create a new XMLHttpRequest object
    xhr = new XMLHttpRequest();
  }
  return xhr;
};

// send player information (id, codename) to database
function sendData(id, name) {
  xhr = getXmlHttpRequestObject();
  xhr.open('POST', 'http://localhost:6969/insertPlayer/' + id + '/' + name, true);
  xhr.send();
}

// receive player information (codename) from database
function getData(idNum) {
  xhr = getXmlHttpRequestObject();
  xhr.open('GET', 'http://localhost:6969/getCodeName/' + idNum, false);
  xhr.send();

  if (xhr.status == 200) {
    return xhr.response;
  } else {
    return null;
  }
}

function updateCountdownTimer() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    if(timerRunning){
      time--;
      if(time<0)
        window.open("playeraction.html", "_self");
      else
        document.getElementById('start-button').innerHTML = `${seconds}`;
    }
    else if(timerRunning=false){

      document.getElementById('start-button').innerHTML = 'Start';
    }
}

setInterval(updateCountdownTimer, 1000);

// calling sendData() or getData() depending on what fields the user inputs
// also assigns codename retrieval to variables for playeraction screen usage
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 9) {
    if (document.getElementById('r1-id').value && !document.getElementById('r1-cn').value && !r1) {
      r1 = getData(document.getElementById('r1-id').value);
	  r1_id = document.getElementById('r1-id').value
      document.getElementById('r1-cn').value = r1;
      localStorage.setItem('r1', r1);
	  localStorage.setItem('r1_id', r1_id); 
    } else if (document.getElementById('r1-id').value && document.getElementById('r1-cn').value && !r1) {
      sendData(document.getElementById('r1-id').value, document.getElementById('r1-cn').value);
      r1 = document.getElementById('r1-cn').value;
	  r1_id = document.getElementById('r1-id').value
      localStorage.setItem('r1', r1);
	  localStorage.setItem('r1_id', r1_id);
    }

    if (document.getElementById('r2-id').value && !document.getElementById('r2-cn').value && !r2) {
      r2 = getData(document.getElementById('r2-id').value);
	  r2_id = document.getElementById('r2-id').value
      document.getElementById('r2-cn').value = r2;
      localStorage.setItem('r2', r2);
	  localStorage.setItem('r2_id', r2_id); 
    } else if (document.getElementById('r2-id').value && document.getElementById('r2-cn').value && !r2) {
      sendData(document.getElementById('r2-id').value, document.getElementById('r2-cn').value);
      r2 = document.getElementById('r2-cn').value;
	  r2_id = document.getElementById('r2-id').value
      localStorage.setItem('r2', r2);
	  localStorage.setItem('r2_id', r2_id);
    }

    if (document.getElementById('r3-id').value && !document.getElementById('r3-cn').value && !r3) {
      r3 = getData(document.getElementById('r3-id').value);
	  r3_id = document.getElementById('r3-id').value
      document.getElementById('r3-cn').value = r3;
      localStorage.setItem('r3', r3);
	  localStorage.setItem('r3_id', r3_id);
    } else if (document.getElementById('r3-id').value && document.getElementById('r3-cn').value && !r3) {
      sendData(document.getElementById('r3-id').value, document.getElementById('r3-cn').value);
      r3 = document.getElementById('r3-cn').value;
	  r3_id = document.getElementById('r3-id').value
      localStorage.setItem('r3', r3);
	  localStorage.setItem('r3_id', r3_id);
    }

    if (document.getElementById('r4-id').value && !document.getElementById('r4-cn').value && !r4) {
      r4 = getData(document.getElementById('r4-id').value);
	  r4_id = document.getElementById('r4-id').value
      document.getElementById('r4-cn').value = r4;
      localStorage.setItem('r4', r4);
	  localStorage.setItem('r4_id', r4_id);
    } else if (document.getElementById('r4-id').value && document.getElementById('r4-cn').value && !r4) {
      sendData(document.getElementById('r4-id').value, document.getElementById('r4-cn').value);
      r4 = document.getElementById('r4-cn').value;
	  r4_id = document.getElementById('r4-id').value
      localStorage.setItem('r4', r4);
	  localStorage.setItem('r4_id', r4_id);
    }

    if (document.getElementById('r5-id').value && !document.getElementById('r5-cn').value && !r5) {
      r5 = getData(document.getElementById('r5-id').value);
	  r5_id = document.getElementById('r5-id').value
      document.getElementById('r5-cn').value = r5;
      localStorage.setItem('r5', r5);
	  localStorage.setItem('r5_id', r5_id);
    } else if (document.getElementById('r5-id').value && document.getElementById('r5-cn').value && !r5) {
      sendData(document.getElementById('r5-id').value, document.getElementById('r5-cn').value);
      r5 = document.getElementById('r5-cn').value;
	  r5_id = document.getElementById('r5-id').value
      localStorage.setItem('r5', r5);
	  localStorage.setItem('r5_id', r5_id);
    }

    if (document.getElementById('r6-id').value && !document.getElementById('r6-cn').value && !r6) {
      r6 = getData(document.getElementById('r6-id').value);
	  r6_id = document.getElementById('r6-id').value
      document.getElementById('r6-cn').value = r6;
      localStorage.setItem('r6', r6);
	  localStorage.setItem('r6_id', r6_id);
    } else if (document.getElementById('r6-id').value && document.getElementById('r6-cn').value && !r6) {
      sendData(document.getElementById('r6-id').value, document.getElementById('r6-cn').value);
      r6 = document.getElementById('r6-cn').value;
	  r6_id = document.getElementById('r6-id').value
      localStorage.setItem('r6', r6);
	  localStorage.setItem('r6_id', r6_id);
    }

    if (document.getElementById('r7-id').value && !document.getElementById('r7-cn').value && !r7) {
      r7 = getData(document.getElementById('r7-id').value);
	  r7_id = document.getElementById('r7-id').value
      document.getElementById('r7-cn').value = r7;
      localStorage.setItem('r7', r7);
	  localStorage.setItem('r7_id', r7_id);
    } else if (document.getElementById('r7-id').value && document.getElementById('r7-cn').value && !r7) {
      sendData(document.getElementById('r7-id').value, document.getElementById('r7-cn').value);
      r7 = document.getElementById('r7-cn').value;
	  r7_id = document.getElementById('r7-id').value
      localStorage.setItem('r7', r7);
	  localStorage.setItem('r7_id', r7_id);
    }

    if (document.getElementById('r8-id').value && !document.getElementById('r8-cn').value && !r8) {
      r8 = getData(document.getElementById('r8-id').value);
	  r8_id = document.getElementById('r8-id').value
      document.getElementById('r8-cn').value = r8;
      localStorage.setItem('r8', r8);
	  localStorage.setItem('r8_id', r8_id);
    } else if (document.getElementById('r8-id').value && document.getElementById('r8-cn').value && !r8) {
      sendData(document.getElementById('r8-id').value, document.getElementById('r8-cn').value);
      r8 = document.getElementById('r8-cn').value;
	  r8_id = document.getElementById('r8-id').value
      localStorage.setItem('r8', r8);
	  localStorage.setItem('r8_id', r8_id);
    }

    if (document.getElementById('g1-id').value && !document.getElementById('g1-cn').value && !g1) {
      g1 = getData(document.getElementById('g1-id').value);
	  g1_id = document.getElementById('g1-id').value
      document.getElementById('g1-cn').value = g1;
      localStorage.setItem('g1', g1);
	  localStorage.setItem('g1_id', g1_id);
    } else if (document.getElementById('g1-id').value && document.getElementById('g1-cn').value && !g1) {
      sendData(document.getElementById('g1-id').value, document.getElementById('g1-cn').value);
      g1 = document.getElementById('g1-cn').value;
	  g1_id = document.getElementById('g1-id').value
      localStorage.setItem('g1', g1);
	  localStorage.setItem('g1_id', g1_id);
    }

    if (document.getElementById('g2-id').value && !document.getElementById('g2-cn').value && !g2) {
      g2 = getData(document.getElementById('g2-id').value);
	  g2_id = document.getElementById('g2-id').value
      document.getElementById('g2-cn').value = g2;
      localStorage.setItem('g2', g2);
	  localStorage.setItem('g2_id', g2_id);
    } else if (document.getElementById('g2-id').value && document.getElementById('g2-cn').value && !g2) {
      sendData(document.getElementById('g2-id').value, document.getElementById('g2-cn').value);
      g2 = document.getElementById('g2-cn').value;
	  g2_id = document.getElementById('g2-id').value
      localStorage.setItem('g2', g2);
	  localStorage.setItem('g2_id', g2_id);
    }

    if (document.getElementById('g3-id').value && !document.getElementById('g3-cn').value && !g3) {
      g3 = getData(document.getElementById('g3-id').value);
	  g3_id = document.getElementById('g3-id').value
      document.getElementById('g3-cn').value = g3;
      localStorage.setItem('g3', g3);
	  localStorage.setItem('g3_id', g3_id);
    } else if (document.getElementById('g3-id').value && document.getElementById('g3-cn').value && !g3) {
      sendData(document.getElementById('g3-id').value, document.getElementById('g3-cn').value);
      g3 = document.getElementById('g3-cn').value;
	  g3_id = document.getElementById('g3-id').value
      localStorage.setItem('g3', g3);
	  localStorage.setItem('g3_id', g3_id);
    }

    if (document.getElementById('g4-id').value && !document.getElementById('g4-cn').value && !g4) {
      g4 = getData(document.getElementById('g4-id').value);
	  g4_id = document.getElementById('g4-id').value
      document.getElementById('g4-cn').value = g4;
      localStorage.setItem('g4', g4);
	  localStorage.setItem('g4_id', g4_id);
    } else if (document.getElementById('g4-id').value && document.getElementById('g4-cn').value && !g4) {
      sendData(document.getElementById('g4-id').value, document.getElementById('g4-cn').value);
      g4 = document.getElementById('g4-cn').value;
	  g4_id = document.getElementById('g4-id').value
      localStorage.setItem('g4', g4);
	  localStorage.setItem('g4_id', g4_id);
    }

    if (document.getElementById('g5-id').value && !document.getElementById('g5-cn').value && !g5) {
      g5 = getData(document.getElementById('g5-id').value);
	  g5_id = document.getElementById('g5-id').value
      document.getElementById('g5-cn').value = g5;
      localStorage.setItem('g5', g5);
	  localStorage.setItem('g5_id', g5_id);
    } else if (document.getElementById('g5-id').value && document.getElementById('g5-cn').value && !g5) {
      sendData(document.getElementById('g5-id').value, document.getElementById('g5-cn').value);
      g5 = document.getElementById('g5-cn').value;
	  g5_id = document.getElementById('g5-id').value
      localStorage.setItem('g5', g5);
	  localStorage.setItem('g5_id', g5_id);
    }

    if (document.getElementById('g6-id').value && !document.getElementById('g6-cn').value && !g6) {
      g6 = getData(document.getElementById('g6-id').value);
	  g6_id = document.getElementById('g6-id').value
      document.getElementById('g6-cn').value = g6;
      localStorage.setItem('g6', g6);
	  localStorage.setItem('g6_id', g6_id);
    } else if (document.getElementById('g6-id').value && document.getElementById('g6-cn').value && !g6) {
      sendData(document.getElementById('g6-id').value, document.getElementById('g6-cn').value);
      g6 = document.getElementById('g6-cn').value;
	  g6_id = document.getElementById('g6-id').value
      localStorage.setItem('g6', g6);
	  localStorage.setItem('g6_id', g6_id);
    }

    if (document.getElementById('g7-id').value && !document.getElementById('g7-cn').value && !g7) {
      g7 = getData(document.getElementById('g7-id').value);
	  g7_id = document.getElementById('g7-id').value
      document.getElementById('g7-cn').value = g7;
      localStorage.setItem('g7', g7);
	  localStorage.setItem('g7_id', g7_id);
    } else if (document.getElementById('g7-id').value && document.getElementById('g7-cn').value && !g7) {
      sendData(document.getElementById('g7-id').value, document.getElementById('g7-cn').value);
      g7 = document.getElementById('g7-cn').value;
	  g7_id = document.getElementById('g7-id').value
      localStorage.setItem('g7', g7);
	  localStorage.setItem('g7_id', g7_id);
    }

    if (document.getElementById('g8-id').value && !document.getElementById('g8-cn').value && !g8) {
      g8 = getData(document.getElementById('g8-id').value);
	  g8_id = document.getElementById('g8-id').value
      document.getElementById('g8-cn').value = g8;
      localStorage.setItem('g8', g8);
	  localStorage.setItem('g8_id', g8_id);
    } else if (document.getElementById('g8-id').value && document.getElementById('g8-cn').value && !g8) {
      sendData(document.getElementById('g8-id').value, document.getElementById('g8-cn').value);
      g8 = document.getElementById('g8-cn').value;
	  g8_id = document.getElementById('g8-id').value
      localStorage.setItem('g8', g8);
	  localStorage.setItem('g8_id', g8_id);
    } else return;
  }
});

// game start timer countdown then go to player action
start.addEventListener("click", function () {
	//Implement timer 
  if(timerRunning)
    timerRunning = false;
  else
    timerRunning = true;
})

