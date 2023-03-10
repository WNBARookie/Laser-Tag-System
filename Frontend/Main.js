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
    }else if(document.getElementById('r1-id').value && document.getElementById('r1-cn').value && !r1){
      sendData(document.getElementById('r1-id').value, document.getElementById('r1-cn').value)
      r1 = document.getElementById('r1-cn').value
    }

    if(document.getElementById('r2-id').value && !document.getElementById('r2-cn').value && !r2){
      r2 = getData(document.getElementById('r2-id').value)
      document.getElementById('r2-cn').value = r2;
    }else if(document.getElementById('r2-id').value && document.getElementById('r2-cn').value && !r2){
      sendData(document.getElementById('r2-id').value, document.getElementById('r2-cn').value)
      r2 = document.getElementById('r2-cn').value
    }

    if(document.getElementById('r3-id').value && !document.getElementById('r3-cn').value && !r3){
      r3 = getData(document.getElementById('r3-id').value)
      document.getElementById('r3-cn').value = r3;
    }else if(document.getElementById('r3-id').value && document.getElementById('r3-cn').value && !r3){
      sendData(document.getElementById('r3-id').value, document.getElementById('r3-cn').value)
      r3 = document.getElementById('r3-cn').value
    }

    if(document.getElementById('r4-id').value && !document.getElementById('r4-cn').value && !r4){
      r4 = getData(document.getElementById('r4-id').value)
      document.getElementById('r4-cn').value = r4;
    }else if(document.getElementById('r4-id').value && document.getElementById('r4-cn').value && !r4){
      sendData(document.getElementById('r4-id').value, document.getElementById('r4-cn').value)
      r4 = document.getElementById('r4-cn').value
    }

    if(document.getElementById('r5-id').value && !document.getElementById('r5-cn').value && !r5){
      r5 = getData(document.getElementById('r5-id').value)
      document.getElementById('r5-cn').value = r5;
    }else if(document.getElementById('r5-id').value && document.getElementById('r5-cn').value && !r5){
      sendData(document.getElementById('r5-id').value, document.getElementById('r5-cn').value)
      r5 = document.getElementById('r5-cn').value
    }

    if(document.getElementById('r6-id').value && !document.getElementById('r6-cn').value && !r6){
      r6 = getData(document.getElementById('r6-id').value)
      document.getElementById('r6-cn').value = r6;
    }else if(document.getElementById('r6-id').value && document.getElementById('r6-cn').value && !r6){
      sendData(document.getElementById('r6-id').value, document.getElementById('r6-cn').value)
      r6 = document.getElementById('r6-cn').value
    }

    if(document.getElementById('r7-id').value && !document.getElementById('r7-cn').value && !r7){
      r7 = getData(document.getElementById('r7-id').value)
      document.getElementById('r7-cn').value = r7;
    }else if(document.getElementById('r7-id').value && document.getElementById('r7-cn').value && !r7){
      sendData(document.getElementById('r7-id').value, document.getElementById('r7-cn').value)
      r7 = document.getElementById('r7-cn').value
    }

    if(document.getElementById('r8-id').value && !document.getElementById('r8-cn').value && !r8){
      r8 = getData(document.getElementById('r8-id').value)
      document.getElementById('r8-cn').value = r8;
    }else if(document.getElementById('r8-id').value && document.getElementById('r8-cn').value && !r8){
      sendData(document.getElementById('r8-id').value, document.getElementById('r8-cn').value)
      r8 = document.getElementById('r8-cn').value
    }

    if(document.getElementById('g1-id').value && !document.getElementById('g1-cn').value && !g1){
      g1 = getData(document.getElementById('g1-id').value)
      document.getElementById('g1-cn').value = g1;
    }else if(document.getElementById('g1-id').value && document.getElementById('g1-cn').value && !g1){
      sendData(document.getElementById('g1-id').value, document.getElementById('g1-cn').value)
      g1 = document.getElementById('g1-cn').value
    }

    if(document.getElementById('g2-id').value && !document.getElementById('g2-cn').value && !g2){
      g2 = getData(document.getElementById('g2-id').value)
      document.getElementById('g2-cn').value = g2;
    }else if(document.getElementById('g2-id').value && document.getElementById('g2-cn').value && !g2){
      sendData(document.getElementById('g2-id').value, document.getElementById('g2-cn').value)
      g2 = document.getElementById('g2-cn').value
    }

    if(document.getElementById('g3-id').value && !document.getElementById('g3-cn').value && !g3){
      g3 = getData(document.getElementById('g3-id').value)
      document.getElementById('g3-cn').value = g3;
    }else if(document.getElementById('g3-id').value && document.getElementById('g3-cn').value && !g3){
      sendData(document.getElementById('g3-id').value, document.getElementById('g3-cn').value)
      g3 = document.getElementById('g3-cn').value
    }

    if(document.getElementById('g4-id').value && !document.getElementById('g4-cn').value && !g4){
      g4 = getData(document.getElementById('g4-id').value)
      document.getElementById('g4-cn').value = g4;
    }else if(document.getElementById('g4-id').value && document.getElementById('g4-cn').value && !g4){
      sendData(document.getElementById('g4-id').value, document.getElementById('g4-cn').value)
      g4 = document.getElementById('g4-cn').value
    }

    if(document.getElementById('g5-id').value && !document.getElementById('g5-cn').value && !g5){
      g5 = getData(document.getElementById('g5-id').value)
      document.getElementById('g5-cn').value = g5;
    }else if(document.getElementById('g5-id').value && document.getElementById('g5-cn').value && !g5){
      sendData(document.getElementById('g5-id').value, document.getElementById('g5-cn').value)
      g5 = document.getElementById('g5-cn').value
    }

    if(document.getElementById('g6-id').value && !document.getElementById('g6-cn').value && !g6){
      g6 = getData(document.getElementById('g6-id').value)
      document.getElementById('g6-cn').value = g6;
    }else if(document.getElementById('g6-id').value && document.getElementById('g6-cn').value && !g6){
      sendData(document.getElementById('g6-id').value, document.getElementById('g6-cn').value)
      g6 = document.getElementById('g6-cn').value
    }

    if(document.getElementById('g7-id').value && !document.getElementById('g7-cn').value && !g7){
      g7 = getData(document.getElementById('g7-id').value)
      document.getElementById('g7-cn').value = g7;
    }else if(document.getElementById('g7-id').value && document.getElementById('g7-cn').value && !g7){
      sendData(document.getElementById('g7-id').value, document.getElementById('g7-cn').value)
      g7 = document.getElementById('g7-cn').value
    }

    if(document.getElementById('g8-id').value && !document.getElementById('g8-cn').value && !g8){
      g8 = getData(document.getElementById('g8-id').value)
      document.getElementById('g8-cn').value = g8;
    }else if(document.getElementById('g8-id').value && document.getElementById('g8-cn').value && !g8){
      sendData(document.getElementById('g8-id').value, document.getElementById('g8-cn').value)
      g8 = document.getElementById('g8-cn').value
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