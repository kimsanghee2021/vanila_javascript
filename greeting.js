const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const USER_LS = 'currentUser';
const greeting = document.querySelector('.js-greetings');
const SHOWING_CN = "showing";
function handleSubmit(e){
    e.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function saveName(text){
    localStorage.setItem(USER_LS, text);
};
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit',handleSubmit);
};

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
        //유저가 없다.
    }else{
        paintGreeting(currentUser);
        //유저가 현재 있다.
    }
};
function init(){
    loadName();
};
init();