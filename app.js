// read elements.

const main_cont = document.querySelector(".main-container");
const data = document.querySelector("#input");
const addButton = document.querySelector("#top-btn");
const bottom =document.querySelector(".bottom"); 

// add Events
addButton.addEventListener("click",createLists);
bottom.addEventListener("click",checkortrash)


// Localstorage variable 
let todos = [];


// function
function createLists(event){
    event.preventDefault(); 
    const lists = document.createElement("div");
    lists.classList.add("lists");
    const li = document.createElement("li");
    if(data.value != ""){
    li.innerText = data.value;
    const checkIcon = document.createElement("i");
    let classesToAdd = ['fa', 'fa-check-circle-o', 'fa-2x','fa-check'];
    checkIcon.classList.add(...classesToAdd);
    const trashIcon = document.createElement("i");
    classesToAdd = ['fa','fa-trash','fa-2x'];
    trashIcon.classList.add(...classesToAdd);
    // console.log(trashIcon);

    lists.appendChild(li);
    lists.appendChild(checkIcon);
    lists.appendChild(trashIcon);
    bottom.appendChild(lists);
    set_Local(li.innerText,false);
    }
    
    data.value = "";
}
function checkortrash(event){
    const Target = event.target;
    if(Target.classList[3]==="fa-check"){
    Target.parentElement.classList.toggle("completed");
    completed_local(Target.parentElement.childNodes[0].innerText);
    }
    if(Target.classList[1]==="fa-trash"){
        Target.parentElement.classList.add("remove");
        remove_local(Target.parentElement.childNodes[0].innerText);
        if(Target.parentElement.addEventListener("transitionend",()=>{
            Target.parentElement.remove();
            
        }));
    }
}

function completed_local(target){
    for(let lis=0; lis<todos.length; lis++){
        if(todos[lis].li === target){
            todos[lis].comp = true;
            let todo = JSON.stringify(todos);
            localStorage.setItem("todos",todo);
            console.log(localStorage.todos);
            break;
        }
    }
}

function set_Local(li,comp){
    let task = {};
    task.li = li;
    task.comp = comp;
    todos.push(task);
    let todo = JSON.stringify(todos);
    localStorage.setItem("todos",todo);
    console.log(localStorage);
}

function remove_local(target){
    // console.log(target);
    for(let lis=0; lis<todos.length; lis++){
        if(todos[lis].li === target){
            todos.splice(lis,1);
            let todo = JSON.stringify(todos);
            localStorage.setItem("todos",todo);
            console.log(localStorage.todos);
            break;
        }

    }
}

function read_Local(){
    if(localStorage.getItem("todos") === null){
        let todo = JSON.stringify(todos);
        localStorage.setItem("todos",todo);
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
        console.log(todos);
    }
    display_from_local();
}


function display_from_local(){
    for(let lis=0; lis<todos.length; lis++){
        const lists = document.createElement("div");
        lists.classList.add("lists");
        const li = document.createElement("li");
        li.innerText = todos[lis].li;
        const checkIcon = document.createElement("i");
        let classesToAdd = ['fa', 'fa-check-circle-o', 'fa-2x','fa-check'];
        checkIcon.classList.add(...classesToAdd);
        const trashIcon = document.createElement("i");
        classesToAdd = ['fa','fa-trash','fa-2x'];
        trashIcon.classList.add(...classesToAdd);
        if(todos[lis].comp){
            lists.classList.toggle("completed");
        }
        lists.appendChild(li);
        lists.appendChild(checkIcon);
        lists.appendChild(trashIcon);
        bottom.appendChild(lists);
    }
}




read_Local();
// console.log(bottom.childElementCount);