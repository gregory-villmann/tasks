const form = document.querySelector('form');


const taskList = document.querySelector(".collection");

const delAll = document.querySelector("#deleteAll");

form.addEventListener('submit', addTask);

taskList.addEventListener('click', delItem);

delAll.addEventListener("click", deleteAll)


function addTask(event){
    const taskInput = document.querySelector('#task').value;

    // create list item
    const li = document.createElement("li");

    // add list item a class name so it would get the styling
    li.className = 'collection-item';


    // <li class="collection-item">test vms <span class="deleteItem"><a onclick="delItem()">X</a></span></li>

    const link = document.createElement('a');
     link.className = "secondary-content";
     link.setAttribute('href', "#");
     link.appendChild(document.createTextNode('X'));
     li.appendChild(link);


    li.appendChild(document.createTextNode(taskInput));
    const ul = document.querySelector(".collection");
    ul.appendChild(li);
    document.querySelector('#task').value = "";


    event.preventDefault();
}

function delItem(e){
    const ul = document.querySelector(".collection");
    if(e.target.textContent === "X"){
        if(confirm("Sure you want to delete?")){
        ul.removeChild(e.target.parentElement);
        }
    }
}

function deleteAll(){
    const ul = document.querySelector(".collection");
        if(confirm("Sure you want to delete all items?")){
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
        }
}