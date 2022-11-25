var request;

/**
 * POST Request
 * send request to backend server.
 * @param {*} event The event object.
 */
function pressedButton(event) {
    event.preventDefault();
    var data = {
        name: nameField.value,
        active: activeCheckbox.value
    };
    request = new XMLHttpRequest();
    request.open("POST", "API/V1/Category");
    request.onreadystatechange = requestUpdate;
    request.send(JSON.stringify(data));
}

/**
 * @param {*} event The event object
 * Check readyState
*/
function requestUpdate(event) {
    //Checking If the request has not received an Answer.
    if (request.readyState < 4) {
        return;
    }
    var responseData = request.responseText;
    //alert
    alert(responseData);
}

//Deklaring Variable name and Fetching values.
var button = document.getElementById("submit");
var nameField = document.getElementById("name-field");
var activeCheckbox = document.getElementById("active-checkbox");

//Adding Listener to button 
button.addEventListener("submit", pressedButton);
