//시간 구하는 방법
const clockContainer = document.querySelector('.js-clock');
const clockTitle = document.querySelector('.js-title');
function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minite = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hour < 10 ? `0${hour}` : hour}:${minite < 10 ? `0${minite}` : minite}:${seconds < 10 ? `0${seconds}` : seconds }`;   
    //만약 초가 10보다 작으면 0을 붙여주고 그게 아니면 그대로 나와라 라는 작은 이프문 


};
function init(){
    getTime();
    setInterval(getTime,1000); //setInterval은 두개의 인자가 들어간다 하나는 함수고 하나는 시간초 인데 시간초마다 그함수를 실행시켜준다는 뜻이다.
};
init();
//