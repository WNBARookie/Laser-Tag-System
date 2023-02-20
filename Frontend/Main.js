// -- Splash Screen
const splash = document.querySelector('.splash-screen');

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

function sendDataCallback(name_txt) {
    // check if response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
		if (name_txt.id == 'r1-cn')
			dataDiv = document.getElementById('r1-cn');
		else if (name_txt.id == 'g1-cn')
			dataDiv = document.getElementById('g1-cn');
        // set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

function sendData(id, name) {
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallback(name);
    // asynchronous requests
    xhr.open("POST", "http://localhost:6969/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // send request over the network
    xhr.send(JSON.stringify({"id": id.textContent, "name": name.textContent}));
}

function getDataCallback() {
// check if response is ready or not
    if (xhr.readyState == 4 && xhr.status == 200) {
        dataDiv = document.getElementById('PLACEHOLDER');
        // set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

function getData() {
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = getDataCallback;
    // asynchronous requests
    xhr.open("GET", "http://localhost:6969/", true);
    // send request over the network
    xhr.send();
	
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
		var user1_id = document.getElementById('r1-id'); 
		var user1_name = document.getElementById('r1-cn');
		var user2_id = document.getElementById('g1-id');
		var user2_name = document.getElementById('g1-cn');
		
		// an id was just entered for either player
		if ((user1_id && !user1_name) || (user2_id && !user2_name)) {
			if (user1_id && !user1_name) {
				sendData(user1_id, user1_name);
				//getData()?
			}
			else if (user2_id && !user2_name) {
				sendData(user2_id.textContent, user2_name.textContent);
				//getData()?
			}
		}
		// a codename was just entered for either player 
		else if ((user1_id && user1_name && !user2_id) || (user2_id && user2_name && !user1_id)) {
			if (user1_id && user1_name && !user2_id)
				sendData(user1_id.textContent, user1_name.textContent);
			else if (user2_id && user2_name && !user1_id)
				sendData(user2_id.textContent, user2_name.textContent);
		}
		// return nothing for all other cases
		else
			return;
	}
});