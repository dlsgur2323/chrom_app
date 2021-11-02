const loginForm = document.querySelector('#login-form');
const loginDiv = document.querySelector('#login-div');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting');
const todoDiv = document.getElementById('todo-div');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginDiv.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoDiv.classList.remove(HIDDEN_CLASSNAME);
}

if(!savedUsername){
    loginDiv.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}