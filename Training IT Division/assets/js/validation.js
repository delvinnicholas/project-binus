function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var genders = "";
    if (document.getElementById('male').checked == true)
        genders = 'male';
    else if (document.getElementById('female').checked == true)
        genders = 'female';
    var address = document.getElementById('address').value;


    var bool = true;

    if (name == "") {
        document.getElementById('rel-name').innerHTML = "Name must filled";
        bool = false;
    }
    else if (cekSpasi(name) < 2) {
        document.getElementById('rel-name').innerHTML = "Name must be more than 1 words";
        bool = false;
    } else {
        document.getElementById('rel-name').innerHTML = "";
    }

    if (email == "") {
        document.getElementById('rel-email').innerHTML = "Email must be filled";
        bool = false;
    }
    else if (cekEmail(email) == false) {
        document.getElementById('rel-email').innerHTML = "Invalid Email Format";
        bool = false;
    } else {
        document.getElementById('rel-email').innerHTML = "";
    }

    if (genders == "") {
        document.getElementById('rel-gender').innerHTML = "Gender must be chosen";
        bool = false;
    } else {
        document.getElementById('rel-gender').innerHTML = "";
    }

    if (address == "") {
        document.getElementById('rel-address').innerHTML = "Address must be filled";
        bool = false;
    }
    else {
        document.getElementById('rel-address').innerHTML = "";
    }

    if (bool) {
        alert("Register Success");
        location.reload();
    }
}

function login() {
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;

    if (email == "") {
        alert("Email must be filled");
        return false;
    }
    else if (cekEmail(email) == false) {
        alert("Invalid Email Format");
        return false;
    }
    else if (password == "") {
        alert("Password must be filled");
        return false;
    }
    else {
        alert("Login Success");
        location.reload();
    }
}

function cekEmail(email) {
    if (email.startsWith("@") || email.startsWith(".")) {
        return false;
    }
    else if (email.endsWith("@") || email.endsWith(".")) {
        return false;
    }
    else if (email.indexOf("@.") > -1 || email.indexOf(".@") > -1) {
        return false;
    }
    else if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
        return false;
    }
    else {
        return true;
    }
}
function cekSpasi(string) {
    string = string.trim();
    return string.split(' ').length;
}	