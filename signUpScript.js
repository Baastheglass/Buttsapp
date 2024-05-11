var firstNameBox = document.querySelector("#first-name");
var lastNameBox = document.querySelector("#last-name");
var emailBox = document.querySelector("#email");
var usernameBox = document.querySelector("#username");
var passwordBox = document.querySelector("#password");
var confirmPasswordBox = document.querySelector("#password2");
var loginButton = document.querySelector("#loginButton");
function checkEmpty()
{
    if(firstNameBox.value == "" || lastNameBox.value == ""
    || emailBox.value == "" || usernameBox.value == "" ||
    passwordBox.value == "" || confirmPasswordBox.value == "")
    {
        alert("Mujhe potty aarahi hai");
    }
    else if(passwordBox.value != confirmPasswordBox.value)
    {
        alert("Passwords do not match");
    }
    else
    {
        alert("Pishaab");
        window.location.href = "./login.html";
    }
}
loginButton.addEventListener("click", checkEmpty);