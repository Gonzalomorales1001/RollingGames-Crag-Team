//creating background blocks
const spans = new Array(263).fill(null).map(() => document.createElement('span'));
spans.forEach(span => span.classList='block')
spans.forEach(span => document.querySelector('.container').appendChild(span));

//Get elements
document.getElementById("btn__login").addEventListener("click", login);
document.getElementById("btn__signup").addEventListener("click", register);
window.addEventListener("resize", broadPage);

//Declaring Variabled
var loginForm = document.querySelector(".form__login");
var registerForm = document.querySelector(".form__register");
var registerFormContainer = document.querySelector(".container__login-register");
var rearBoxLogin = document.querySelector(".forms__rearbox-login");
var rearBoxRegister = document.querySelector(".forms__rearbox-register");

//functions
function broadPage(){

    if (window.innerWidth > 850){
        rearBoxRegister.style.display = "block";
        rearBoxLogin.style.display = "block";
    }else{
        rearBoxRegister.style.display = "block";
        rearBoxRegister.style.opacity = "1";
        rearBoxLogin.style.display = "none";
        loginForm.style.display = "block";
        registerFormContainer.style.left = "0px";
        registerForm.style.display = "none";   
    }
}

broadPage();


function login(){
        if (window.innerWidth > 850){
            loginForm.style.display = "block";
            registerFormContainer.style.left = "10px";
            registerForm.style.display = "none";
            rearBoxRegister.style.opacity = "1";
            rearBoxLogin.style.opacity = "0";
        }else{
            loginForm.style.display = "block";
            registerFormContainer.style.left = "0px";
            registerForm.style.display = "none";
            rearBoxRegister.style.display = "block";
            rearBoxLogin.style.display = "none";
        }
    }

function register(){
        if (window.innerWidth > 850){
            registerForm.style.display = "block";
            registerFormContainer.style.left = "410px";
            loginForm.style.display = "none";
            rearBoxRegister.style.opacity = "0";
            rearBoxLogin.style.opacity = "1";
        }else{
            registerForm.style.display = "block";
            registerFormContainer.style.left = "0px";
            loginForm.style.display = "none";
            rearBoxRegister.style.display = "none";
            rearBoxLogin.style.display = "block";
            rearBoxLogin.style.opacity = "1";
        }
}