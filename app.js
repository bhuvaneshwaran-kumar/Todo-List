// read elements.

const main_cont = document.querySelector(".main-container");
const data = document.querySelector("#input");
const addButton = document.querySelector("#top-btn");
const bottom =document.querySelector(".bottom"); 

// add Events
addButton.addEventListener("click",createLists);
bottom.addEventListener("click",checkortrash)


// function

function createLists(event){
    event.preventDefault();  const lists = document.createElement("div");
    lists.classList.add("lists");
    const li = document.createElement("li");
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
    bottom.appendChild(lists)

    data.value = "";
}
function checkortrash(event){
    const Target = event.target;

    if(Target.classList[3]==="fa-check"){
    Target.parentElement.classList.toggle("completed");
    }
    if(Target.classList[1]==="fa-trash"){
        Target.parentElement.classList.add("remove");
        if(Target.parentElement.addEventListener("transitionend",()=>{
            Target.parentElement.remove();
        }));
    ``}
}