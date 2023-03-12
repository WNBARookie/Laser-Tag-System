// -- Splash Screen
const splash = document.querySelector('.splash-screen');
const start = document.querySelector('.start-button');
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

// var players = {
// r1 : null,
// r2 : null,
// r3 : null,
// r4 : null,
// r5 : null,
// r6 : null,
// r7 : null,
// r8 : null,

// g1 : null,
// g2 : null,
// g3 : null,
// g4 : null,
// g5 : null,
// g6 : null,
// g7 : null,
// g8 : null,
// };

//document.exports = {r1, r2, r3, r4, r5, r6, r7, r8, g1, g2, g3, g4, g5, g6, g7, g8};
//document.exports = {players};

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
    xhr.open("POST", "http://localhost:6969/insertPlayer/" + id + "/" + name, true);
    xhr.send();
}

// receive player information (codename) from database
function getData(idNum) {
    xhr = getXmlHttpRequestObject();
    xhr.open("GET", "http://localhost:6969/getCodeName/" + idNum, false);
    xhr.send();
    
    if(xhr.status == 200){
      return xhr.response
    }else{
      return null;
    }
}

// calling sendData() or getData() depending on what fields the user inputs
	// also assigns codename retrieval to variables for playeraction screen usage 
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 9) {

    if(document.getElementById('r1-id').value && !document.getElementById('r1-cn').value && !r1){
      r1 = getData(document.getElementById('r1-id').value)
      document.getElementById('r1-cn').value = r1;
      localStorage.setItem("r1", r1);
    }else if(document.getElementById('r1-id').value && document.getElementById('r1-cn').value && !r1){
      sendData(document.getElementById('r1-id').value, document.getElementById('r1-cn').value)
      r1 = document.getElementById('r1-cn').value
      localStorage.setItem("r1", r1);
    }

    if(document.getElementById('r2-id').value && !document.getElementById('r2-cn').value && !r2){
      r2 = getData(document.getElementById('r2-id').value)
      document.getElementById('r2-cn').value = r2;
      localStorage.setItem("r2", r2);
    }else if(document.getElementById('r2-id').value && document.getElementById('r2-cn').value && !r2){
      sendData(document.getElementById('r2-id').value, document.getElementById('r2-cn').value)
      r2 = document.getElementById('r2-cn').value
      localStorage.setItem("r2", r2);
    }

    if(document.getElementById('r3-id').value && !document.getElementById('r3-cn').value && !r3){
      r3 = getData(document.getElementById('r3-id').value)
      document.getElementById('r3-cn').value = r3;
      localStorage.setItem("r3", r3);
    }else if(document.getElementById('r3-id').value && document.getElementById('r3-cn').value && !r3){
      sendData(document.getElementById('r3-id').value, document.getElementById('r3-cn').value)
      r3 = document.getElementById('r3-cn').value
      localStorage.setItem("r3", r3);
    }

    if(document.getElementById('r4-id').value && !document.getElementById('r4-cn').value && !r4){
      r4 = getData(document.getElementById('r4-id').value)
      document.getElementById('r4-cn').value = r4;
      localStorage.setItem("r4", r4);
    }else if(document.getElementById('r4-id').value && document.getElementById('r4-cn').value && !r4){
      sendData(document.getElementById('r4-id').value, document.getElementById('r4-cn').value)
      r4 = document.getElementById('r4-cn').value;
      localStorage.setItem("r4", r4);
    }

    if(document.getElementById('r5-id').value && !document.getElementById('r5-cn').value && !r5){
      r5 = getData(document.getElementById('r5-id').value)
      document.getElementById('r5-cn').value = r5;
      localStorage.setItem("r5", r5);
    }else if(document.getElementById('r5-id').value && document.getElementById('r5-cn').value && !r5){
      sendData(document.getElementById('r5-id').value, document.getElementById('r5-cn').value)
      r5 = document.getElementById('r5-cn').value;
      localStorage.setItem("r5", r5);
    }

    if(document.getElementById('r6-id').value && !document.getElementById('r6-cn').value && !r6){
      r6 = getData(document.getElementById('r6-id').value)
      document.getElementById('r6-cn').value = r6;
      localStorage.setItem("r6", r6);
    }else if(document.getElementById('r6-id').value && document.getElementById('r6-cn').value && !r6){
      sendData(document.getElementById('r6-id').value, document.getElementById('r6-cn').value)
      r6 = document.getElementById('r6-cn').value;
      localStorage.setItem("r6", r6);
    }

    if(document.getElementById('r7-id').value && !document.getElementById('r7-cn').value && !r7){
      r7 = getData(document.getElementById('r7-id').value)
      document.getElementById('r7-cn').value = r7;
      localStorage.setItem("r7", r7);
    }else if(document.getElementById('r7-id').value && document.getElementById('r7-cn').value && !r7){
      sendData(document.getElementById('r7-id').value, document.getElementById('r7-cn').value)
      r7 = document.getElementById('r7-cn').value;
      localStorage.setItem("r7", r7);
    }

    if(document.getElementById('r8-id').value && !document.getElementById('r8-cn').value && !r8){
      r8 = getData(document.getElementById('r8-id').value)
      document.getElementById('r8-cn').value = r8;
      localStorage.setItem("r8", r8);
    }else if(document.getElementById('r8-id').value && document.getElementById('r8-cn').value && !r8){
      sendData(document.getElementById('r8-id').value, document.getElementById('r8-cn').value)
      r8 = document.getElementById('r8-cn').value;
      localStorage.setItem("r8", r8);
    }

    if(document.getElementById('g1-id').value && !document.getElementById('g1-cn').value && !g1){
      g1 = getData(document.getElementById('g1-id').value)
      document.getElementById('g1-cn').value = g1;
      localStorage.setItem("g1", g1);
    }else if(document.getElementById('g1-id').value && document.getElementById('g1-cn').value && !g1){
      sendData(document.getElementById('g1-id').value, document.getElementById('g1-cn').value)
      g1 = document.getElementById('g1-cn').value
      localStorage.setItem("g1", g1);
    }

    if(document.getElementById('g2-id').value && !document.getElementById('g2-cn').value && !g2){
      g2 = getData(document.getElementById('g2-id').value)
      document.getElementById('g2-cn').value = g2;
      localStorage.setItem("g2", g2);
    }else if(document.getElementById('g2-id').value && document.getElementById('g2-cn').value && !g2){
      sendData(document.getElementById('g2-id').value, document.getElementById('g2-cn').value)
      g2 = document.getElementById('g2-cn').value
      localStorage.setItem("g2", g2);
    }

    if(document.getElementById('g3-id').value && !document.getElementById('g3-cn').value && !g3){
      g3 = getData(document.getElementById('g3-id').value)
      document.getElementById('g3-cn').value = g3;
      localStorage.setItem("g3", g3);
    }else if(document.getElementById('g3-id').value && document.getElementById('g3-cn').value && !g3){
      sendData(document.getElementById('g3-id').value, document.getElementById('g3-cn').value)
      g3 = document.getElementById('g3-cn').value
      localStorage.setItem("g3", g3);
    }

    if(document.getElementById('g4-id').value && !document.getElementById('g4-cn').value && !g4){
      g4 = getData(document.getElementById('g4-id').value)
      document.getElementById('g4-cn').value = g4;
      localStorage.setItem("g4", g4);
    }else if(document.getElementById('g4-id').value && document.getElementById('g4-cn').value && !g4){
      sendData(document.getElementById('g4-id').value, document.getElementById('g4-cn').value)
      g4 = document.getElementById('g4-cn').value
      localStorage.setItem("g4", g4);
    }

    if(document.getElementById('g5-id').value && !document.getElementById('g5-cn').value && !g5){
      g5 = getData(document.getElementById('g5-id').value)
      document.getElementById('g5-cn').value = g5;
      localStorage.setItem("g5", g5);
    }else if(document.getElementById('g5-id').value && document.getElementById('g5-cn').value && !g5){
      sendData(document.getElementById('g5-id').value, document.getElementById('g5-cn').value)
      g5 = document.getElementById('g5-cn').value
      localStorage.setItem("g5", g5);
    }

    if(document.getElementById('g6-id').value && !document.getElementById('g6-cn').value && !g6){
      g6 = getData(document.getElementById('g6-id').value)
      document.getElementById('g6-cn').value = g6;
      localStorage.setItem("g6", g6);
    }else if(document.getElementById('g6-id').value && document.getElementById('g6-cn').value && !g6){
      sendData(document.getElementById('g6-id').value, document.getElementById('g6-cn').value)
      g6 = document.getElementById('g6-cn').value
      localStorage.setItem("g6", g6);
    }

    if(document.getElementById('g7-id').value && !document.getElementById('g7-cn').value && !g7){
      g7 = getData(document.getElementById('g7-id').value)
      document.getElementById('g7-cn').value = g7;
      localStorage.setItem("g7", g7);
    }else if(document.getElementById('g7-id').value && document.getElementById('g7-cn').value && !g7){
      sendData(document.getElementById('g7-id').value, document.getElementById('g7-cn').value)
      g7 = document.getElementById('g7-cn').value
      localStorage.setItem("g7", g7);
    }

    if(document.getElementById('g8-id').value && !document.getElementById('g8-cn').value && !g8){
      g8 = getData(document.getElementById('g8-id').value)
      document.getElementById('g8-cn').value = g8;
      localStorage.setItem("g8", g8);
    }else if(document.getElementById('g8-id').value && document.getElementById('g8-cn').value && !g8){
      sendData(document.getElementById('g8-id').value, document.getElementById('g8-cn').value)
      g8 = document.getElementById('g8-cn').value
      localStorage.setItem("g8", g8);
    }

		else
			return;
	}
});

// game start timer countdown then go to player action
start.addEventListener("click", function () {
	
	//Implement timer 
	
	window.open("playeraction.html", "_self");
  
})