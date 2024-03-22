function processLogin() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var response = request.responseText;
                console.log(JSON.parse(response)["status"]);
                if (JSON.parse(response)["status"] === "loggedIn") {
                    window.location.replace("http://localhost/yourwebsite/profile.html");
                } else {
                    alert("Login failed. Please try again.");
                }
            } else {
                alert("Error: " + request.status);
            }
        }
    };

    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var loginUrl = "PHP/login.php";
    var loginParams = "email=" + encodeURIComponent(userEmail) + "&password=" + encodeURIComponent(userPassword);

    request.open("POST", loginUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(loginParams);
}
