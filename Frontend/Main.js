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

// HTTP request
var xhr = null;
getXmlHttpRequestObject = function () {
    if (!xhr) {
    // create a new XMLHttpRequest object
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

// function sendDataCallback() {
//     // check if response is ready or not
//     if (xhr.readyState == 4 && xhr.status == 201) {
//         dataDiv = document.getElementsByClassName('input-codename');
//         // set current data text
//         dataDiv.innerHTML = xhr.responseText;
//     }
// }

function sendData(id, name) {
    xhr = getXmlHttpRequestObject();
    //xhr.onreadystatechange = sendDataCallback;
    // asynchronous requests
    xhr.open("POST", "http://localhost:6969/insertPlayer/" + id + "/" + name, true);
    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // send request over the network
    //xhr.send(JSON.stringify({"id": id, "name": name}));
    xhr.send();
}

// function getDataCallback() {
// 	// check if response is ready or not
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         //dataDiv = document.getElementById('PLACEHOLDER');
//         // set current data text
//         //dataDiv.innerHTML = xhr.responseText;
//         console.log(xhr.response);
//         return xhr.response;
//     }
// }

function getData(idNum) {
    var response;
    let xhr = new XMLHttpRequest();
    // xhr = getXmlHttpRequestObject();
    //xhr.onreadystatechange = getDataCallback;
    // asynchronous requests
    xhr.open("GET", "http://localhost:6969/getCodeName/" + idNum, true);
    //xhr.onreadystatechange = getDataCallback();
    // send request over the network
    xhr.send();
    xhr.onload = function(){
      console.log(xhr.response);
      response = xhr.response;
    }
    return response;
}

// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 9) { 
//     // add FIX for user pressing enter without a space selected ?
// 	user_id = document.getElementsByClassName('input-id').value; // FIX
// 	user_name = document.getElementsByClassName('input-codename').value; // FIX
	
//   console.log(getData(1));

//   sendData(5, "bill");
//   }

  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
		// add FIX for user pressing enter without a space selected ?
		var user1_id = document.getElementById('r1-id').value; 
		var user1_name = document.getElementById('r1-cn').value;
		var user2_id = document.getElementById('g1-id').value;
		var user2_name = document.getElementById('g1-cn').value;
		
    if(user1_id && user1_name){
      sendData(user1_id, user1_name);
    }
    
    if(user2_id && user2_name){
      sendData(user2_id, user2_name);
    }

		// // an id was just entered for either player
		// if ((user1_id && !user1_name) || (user2_id && !user2_name)) {
		// 	if (user1_id && !user1_name) {
		// 		sendData(user1_id, user1_name);
		// 		//getData()?
		// 	}
		// 	else if (user2_id && !user2_name) {
		// 		sendData(user2_id.textContent, user2_name.textContent);
		// 		//getData()?
		// 	}
		// }
		// // a codename was just entered for either player 
		// else if ((user1_id && user1_name && !user2_id) || (user2_id && user2_name && !user1_id)) {
		// 	if (user1_id && user1_name && !user2_id)
		// 		sendData(user1_id.textContent, user1_name.textContent);
		// 	else if (user2_id && user2_name && !user1_id)
		// 		sendData(user2_id.textContent, user2_name.textContent);
		// }
		// return nothing for all other cases
		else
			return;
	}

	//(ASSUMING USER INPUTS DATA AND PRESSES ENTER ON FIRST SPACE BEFORE SECOND SPACE)
	// if user presses enter on a blank space 
	// if ((!user_id && !user_name) || (!user_id && user_name))
	// 	return;
	// // if user presses enter after inserting id 
	// else if (user_id && !user_name)
	// 	// implies that DB retrieval has not occurred yet, so send data
	// 	//sendData(user_id, user_name);
	// 	getData(user_id); //?
	// 	return;
	// // if user presses enter after inserting codename
	// // else if (user_id && user_name)
	// // 	// implies that DB retrieval has already occurred (and found no match), so just write to it
	// // 	sendData(user_id, user_name);
	// // 	return;
  //}
});