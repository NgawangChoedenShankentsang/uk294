var request;

/**
 * DELETE Request
 * send request to backend server.
 * @param {*} event The event object.
 */
function pressedButton(event) {
    var data = document.getElementById("id-field")   

    request = new XMLHttpRequest();
    request.open("DELETE", "API/V1/Delete/Category" );
    request.onreadystatechange = requestUpdate;
    request.send(data); 
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
    
    var responeData = JSON.parse(request.responseText);
    console.log(responeData.result);
    //alert
    alert(responeData.result); 
}

//Addding listener to the button
var button = document.getElementById("submit");
button.addEventListener("submit", pressedButton);
