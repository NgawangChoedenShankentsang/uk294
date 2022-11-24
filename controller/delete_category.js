var calculateRequest;
function pressedButton(event) {
    var data = document.getElementById("id-field")   

    calculateRequest = new XMLHttpRequest();
    calculateRequest.open("DELETE", "../API/V1/Delete/Category/" );
    calculateRequest.onreadystatechange = requestUpdate;
    calculateRequest.send(data); 
} 

function requestUpdate(event) {
    if (calculateRequest.readyState < 4) {
        return;
    }
    
    var responeData = JSON.parse(calculateRequest.responseText);
    console.log(responeData.result);
    alert(responeData.result); 
}
var calculateButton = document.getElementById("submit");
calculateButton.addEventListener("submit", pressedButton);
