//creating background blocks
const spans = new Array(263).fill(null).map(() => document.createElement('span'));
spans.forEach(span => span.classList='block')
spans.forEach(span => document.querySelector('.container').appendChild(span));

//Get elements
document.getElementById("btn__login").addEventListener("click", displayLogin);
document.getElementById("btn__signup").addEventListener("click", displayRegister);
window.addEventListener("resize", broadPage);

//Declaring Variables
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


function displayLogin(){
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
        clear()
    }

function displayRegister(){
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
        clear()
}

//Modal
let modal=document.querySelector('#modal')

const forgotModal=(event)=>{
    event.preventDefault()
    modal.style.display='flex'
}

const closeModal=(event)=>{
    event.preventDefault()
    modal.style.display='none'
}

// USERS

let username=document.querySelector('#login-username')
let password=document.querySelector('#login-password')

class user{
    constructor(username,password,email,admin=false){
        this.username=username
        this.password=password
        this.email=email
        this.admin=admin
    }
}

//default users
const admin = new user('admin','cragteam','admin@admin.com',true)
const defaultUser=new user('user','1234','user@gmail.com')

const saveUsers=()=>localStorage.setItem('users',JSON.stringify(users))
const saveRequests=()=>localStorage.setItem('requests',JSON.stringify(requests))

let users=JSON.parse(localStorage.getItem('users'))||[admin,defaultUser]
saveUsers()

let requests=JSON.parse(localStorage.getItem('requests'))||[]
saveRequests()

let findUser=''

const logIn=(event)=>{
    event.preventDefault()

    let usernameValue=username.value
    let passwordValue=password.value

    findUser=users.find(user=>user.username===usernameValue)

    if(findUser){
        if(usernameValue===findUser.username&&passwordValue===findUser.password){
            localStorage.setItem('sesion',JSON.stringify(usernameValue))
            username.value=''
            password.value=''
            clear()
            // location.replace('/pages/index.html')
        }else{
            document.querySelector('#IncorrectPassword').style.display='inline'
            password.style.outline='2px solid red'
        } 
    }else{
        document.querySelector('#UserNotFound').style.display='inline'
        username.style.outline='2px solid red'
    }
}

username.addEventListener('focus',clear)
password.addEventListener('focus',clear)

function clear() {
    //login inputs
    document.querySelector('#UserNotFound').style.display='none'
    username.style.outline='none'

    document.querySelector('#IncorrectPassword').style.display='none'
    password.style.outline='none'
    //register inputs
    document.querySelector('#UserAlreadyExist').style.display='none'
    registerUsername.style.outline='none'

    document.querySelector('#EmailInUse').style.display='none'
    registerEmail.style.outline='none'

    document.querySelector('#PasswordMinLength').style.display='none'
    registerPassword.style.outline='none'

    document.querySelector('#MismatchPasswords').style.display='none'
    confirmPassword.style.outline='none'
}

let registerUsername=document.querySelector('#register-username')
let registerEmail=document.querySelector('#register-email')
let registerPassword=document.querySelector('#register-password')
let confirmPassword=document.querySelector('#confirm-password')

let userExist=false
let usedEmail=false

let RequestExist=false
let RequestUsedEmail=false

const signUp=(event)=>{
    event.preventDefault()

    let registerUsernameValue=registerUsername.value
    let registerEmailValue=registerEmail.value
    let registerPasswordValue=registerPassword.value
    let confirmPasswordValue=confirmPassword.value

    userExist=users.find(user=>user.username==registerUsernameValue)
    usedEmail=users.find(user=>user.email==registerEmailValue)

    RequestExist=requests.find(request=>request.username==registerUsernameValue)
    RequestUsedEmail=requests.find(request=>request.email==registerEmailValue)


    if(!userExist&&!RequestExist){
        if(!usedEmail&&!RequestUsedEmail){
            if(registerPasswordValue.length>=7){
                if(registerPasswordValue===confirmPasswordValue){
                    let newUser=new user(registerUsernameValue,registerPasswordValue,registerEmailValue)
                    requests.push(newUser)
                    saveRequests()
        
                    registerUsername.value=''
                    registerEmail.value=''
                    registerPassword.value=''
                    confirmPassword.value=''
                    clear()
        
                }else{
                    document.querySelector('#MismatchPasswords').style.display='inline'
                    confirmPassword.style.outline='2px solid red'
                }
            }else{
                document.querySelector('#PasswordMinLength').style.display='inline'
                registerPassword.style.outline='2px solid red'
            }
        }else{
            document.querySelector('#EmailInUse').style.display='inline'
            registerEmail.style.outline='2px solid red'
        }
    }else{
        document.querySelector('#UserAlreadyExist').style.display='inline'
        registerUsername.style.outline='2px solid red'
    }
}

registerUsername.addEventListener('focus',clear)
registerEmail.addEventListener('focus',clear)
registerPassword.addEventListener('focus',clear)
confirmPassword.addEventListener('focus',clear)