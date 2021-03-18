const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = []; //해야할일이 생성될때마다 array에 추가되도록 할것.


function deleteToDo(event){
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //모든 toDos가 li의 id와 같지 않을때.
    });
     //console.log(cleanToDo);
    toDos = cleanToDo;
    saveToDos(); //toDos저장
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object를 string으로 변경
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text; //submit에 제출된 텍스트값
    li.appendChild(delBtn); //btn을 li에 추가
    li.appendChild(span); //span을 li에 추가
    li.id = newId; //각 li에 id값 추가
    toDoList.appendChild(li); //li를 ul에 추가
    const toDoObg = {
        text: text,
        id: newId
    };
    toDos.push(toDoObg);
    saveToDos(); //toDos안에 넣은 이후에 호
    출해야함!
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) { //list에 있는 모든 Itemd을 위한 함수 실행
            paintToDo(toDo.text);
        });
    } else {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();