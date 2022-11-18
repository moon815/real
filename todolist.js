

// 새로고침
setTimeout(function (interval) {
    clearInterval(interval);
}, setInterval(function () {
        
    let today = new Date();   
    
    
    let year = today.getFullYear(); 
    let month = ("0" + (today.getMonth() + 1)).slice(-2);  
    let date = ("0" + today.getDate()).slice(-2);  
    let day = today.getDay();  

    let hour = today.getHours(); 
    let minute = ("0" + today.getMinutes()).slice(-2); 
    let time = ("0" + today.getSeconds()).slice(-2);
    let sec = ("0" + today.getMilliseconds()).slice(-2);

    today_write =  (`<p>${year}-${month}-${date}</p>`);
    time_write = (`<p>${hour}:${minute}:${time}</p>`);

    document.getElementById("date").innerHTML = today_write;
    document.getElementById("time").innerHTML = time_write;    
    
}, 1)); 



// 추가, 변경, 삭제

const todoList = document.getElementById("todoList");
const addBox = document.getElementById("addBox");
const form = document.getElementById("todo-form");


function deleteToDo(event){
  const div = document.getElementById
  console.log(div);
  div.remove();
}

addBox.addEventListener("click", addToDo);


function addToDo(){
  const todo = document.createElement("div");

  todo.innerHTML = (`
  <div class="todo">
    <div class="checkBox">
      <i class="fa-regular fa-square"></i>
    </div>
    <form class="content" action="">
          <input id="noenter" type="text" style="border: none;" onkeypress="if(event.keyCode=='13'){event.preventDefault(); searchEvt();}">
      </form>
      <div class="deleteButton" id="deleteButton">
        <i class="fa fa-xmark"></i>
      </div>
  </div>`
  
  );

  todoList.appendChild(todo);

  const deleteButton = document.querySelectorAll("#deleteButton");
  deleteButton.forEach(element => element.addEventListener("click", deleteToDo));
  let idx = $('input#noenter').index(this);
    $('input#noenter').eq(idx).focus();

  
};

// 삭제

function deleteToDo(event){
  if (confirm("정말로 해당 내용을 삭제하시겠습니까?") == true) {
    const div = event.target.parentElement;
    div.parentElement.remove();
  }
}


// 아무 내용 입력 없을 시 입력 취소
function searchEvt(){
  let idxtext = $(':focus').val();
  
  if( idxtext == "" ){  
    alert("오늘 할 일을 적어주세요.");
    return false;
  }
  else {
    addToDo();
  }
  
}
  

//바로가기
const addgo = document.getElementById('addgo');
const addbaro = document.getElementById('addbaro');
const cancle = document.querySelector("#addbaro .form a:first-child");
const accept = document.querySelector("#addbaro .form a:last-child");
const footer = document.querySelector("footer");
const nameInput = document.querySelector(".name");
const URLInput = document.querySelector(".url");

addgo.addEventListener("click", displaybaro);
cancle.addEventListener("click", closebaro);
accept.addEventListener("click", acceptbaro);

function displaybaro() {
  resetInput();
  addbaro.style.display = "block";
};

function closebaro() {
  resetInput();
  addbaro.style.display = "none";
};

function resetInput() {
  nameInput.value = "";
  URLInput.value = "";
}

function acceptbaro(){
  const baro = document.querySelector("footer");
  
  baro.innerHTML += (`
  <div class="circle">
        <a href="https://www.${URLInput.value}/">
          <div class="icon">
            <img src="test" alt="">       
          </div>
        </a>
      </div>`
  
  );
  
  footer.appendChild(baro);
  
  resetInput();
  closebaro();

}



// 이스터에그

if (navigator.onLine == false){
  window.location.href = './easteregg.html';
};