var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field");
var requestLogin;

function pressedButton(event) {
  event.preventDefault();

  var signInData = {
    username: usernameField.value,
    password: passwordField.value 
  };

  requestLogin = new XMLHttpRequest();
  requestLogin.open("POST", "../API/V1/Authenticate");
  requestLogin.onreadystatechange = requestLogin;
  requestLogin.send(JSON.stringify(signInData));
}

  function requestLogin(event) {
    if (requestLogin.readyState < 4) {
      return;
    }
    var responseData = JSON.parse(requestLogin.responseText);
    alert(responseData);
  }
