const title = document.querySelector("#title"); //querySelector은 노드의 첫번째 자식을 반환한다. 도큐멘트의 첫번째 자식인 #title을 찾는것이다.
title.innerHTML = '자바스크립트로 타이틀을 변경할 수 있다니...!';
console.log(title);
title.style.color='red';

//도큐멘트 사이즈가 변경될때 콘솔로그에서 이벤트가 발생했다라는 문구가 뜨게 작성하는 방법
function handleResize(){
    console.log('도큐멘트 사이즈가 움직이고 있어!');
};
window.addEventListener('resize',handleResize);

//제목을 클릭하면 색상 바뀌게 하는 방법
function handeClick(){
    title.style.color = 'blue';

};
title.addEventListener('click',handeClick);

//if문으로 글 나오게 하기 
document.write('********* if문으로 글 나오게 작성하기 ************<br>');
if('110'===110){
    document.write('"110"이랑 110이랑 다릅니다! 문자와 숫자는 동일하지 않는다.');
}else if(110===110){
    document.write('숫자와 숫자의 같은 수는 동일하게 나오지요~!','<br><br>');
};

//피연산자 &&
document.write('********* 피연산자로 나오게 하기 && ************<br>');
if('상희'==='상희' && 20 > 10){
    document.write('yes!');
}else{
    document.write('no');
};

//prompt로 술 마실 수 잇는 가능 한 나이 측정해보기 
document.write('<br><br>********* prompt사용법 - 요즘은 잘 안쓰는 옛날 방식의 자바스크립트다.************<br>');
const age = prompt('너 몇살이니? 만 20세가 넘어야 술을 마실 수 있단다!');
if(age > 18){
    document.write('음주 가능한 나이!','<br>');
}else{
    document.write('안돼 돌아가.. 집 가셈.. ','<br>');
};
document.write(age);




//텍스트 클릭시 이벤트 발생하게 하는 방법
{
    const bigTitle = document.querySelector('#bigtitle');
    const BASE_COLOR = 'green';
    const OTHER_COLOR = 'yellow';

    function colorChange(){
        const currentColor = bigTitle.style.color;
        if(currentColor === BASE_COLOR){
            bigTitle.style.color = OTHER_COLOR;
        }else{
            bigTitle.style.color = BASE_COLOR;
        }
    };

    function init(){         //어플리케이션 초기화 하는 방법
        bigTitle.style.color = BASE_COLOR;
        bigTitle.addEventListener('click',colorChange);

    }
    init();
}


//리소스는 이미지이다. 
//이벤트 발생하는 단어들은 DOM에서 확인할 수 있다. 거기서 가져온 offline을 활용해 보자 
function hadleOffline(){
    document.write('와이파이 꺼졌을떄만 작동한다!');
}
function hadleOnline(){
    document.write('와이파이 켜지면 작동한다!');
}

window.addEventListener('offline',hadleOffline);
window.addEventListener('online',hadleOnline);




//css를 이용해 클릭시 css에 있는 색상을 가져오는 방법에 대해 배워보자 
const title2 = document.querySelector('#title2');
const clickedClass = 'clicked';

function handleClicked(){
    const currentClass = title2.className;
    if(currentClass !== clickedClass){
        currentClass = clickedClass;
    }else {
        currentClass = '';
    };
};

function init(){
    title2.addEventListener('click',handleClicked);
};
init();











