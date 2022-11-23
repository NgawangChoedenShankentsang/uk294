

/**
 * Called as onsubmit event by the login form itself.
 * Submits the login form as an AJAX request.
 * Will hide the overlay on success.
 */

/*
var calculateRequest;
function authenticate(event) {
	var data = {
		values: [
			usernameField.value,
			passwordField.value
		]
	};
	calculateRequest = new XMLHttpRequest();
    calculateRequest.open("POST", "API/V1/Authenticate");
    calculateRequest.onreadystatechange = onCalculationRequestUpdate;
    calculateRequest.send(JSON.stringify(data));
}

function onCalculationRequestUpdate(event) {
    if (calculateRequest.readyState < 4) {
        return;
    }
    
    var responeData = JSON.parse(calculateRequest.responseText);

    alert(responeData.result);
}

var calculateButton = document.getElementById("submit");
calculateButton.addEventListener("click", authenticate);

var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field"); */