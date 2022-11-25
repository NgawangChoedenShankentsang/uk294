//Deklaring Variable name and Fetching values.
var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field");
var sendRequest;

/**
 * AUTHENTIFICATION Request
 * The login form itself has an onsubmit event that it calls. 
 * submits an AJAX request for the login form. 
 * send request to backend server.
 * @param {*} event The event object.
 */
function pressedButton(event) {
    event.preventDefault();

    var data = {
        username: usernameField.value,
        password: passwordField.value
    };
        sendRequest = new XMLHttpRequest();
        sendRequest.open("POST", "API/V1/Authenticate");
        sendRequest.onreadystatechange = requestUpdate;
        sendRequest.send(JSON.stringify(data));

}

/**
 * @param {*} event The event object
 * Check readyState
*/

function requestUpdate(event) {
    //Checking If the request has not received an Answer.
    if (sendRequest.readyState < 4) {
        return;
    }
   //print in console
   alert(sendRequest.status);
   alert(sendRequest.statusText);
}


