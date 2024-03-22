function processRegistration() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                alert(request.responseText);
                console.log(request.responseText);
            } else {
                alert("Error: " + request.status);
            }
        }
    };

    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userName = document.getElementById("name").value;
    var userConfirmPassword = document.getElementById("confirm_password").value;
    
    if (userPassword != userConfirmPassword) {
        alert("Passwords do not match");
        return;
    }
    
    var userPhone = document.getElementById("phone").value;
    var userDob = document.getElementById("dob").value;
    var registrationUrl = "PHP/register.php";
    var registrationParams = "email=" + encodeURIComponent(userEmail) + "&password=" + encodeURIComponent(userPassword) + "&name=" + encodeURIComponent(userName) + "&phone=" + encodeURIComponent(userPhone) + "&dob=" + encodeURIComponent(userDob);

    request.open("POST", registrationUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(registrationParams);
}
