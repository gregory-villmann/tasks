/*function lisame(){
let lisatavSona = document.getElementById('task').value;
let ul = document.getElementById("list");
let li = document.createElement("li");

li.appendChild(document.createTextNode(lisatavSona));
ul.appendChild(li);

}*/

const form = document.querySelector('form');


const taskList = document.querySelector(".collection");

form.addEventListener('submit', addTask);

taskList.addEventListener('click', delItem);


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


    event.preventDefault();
}

function delItem(e){
    const ul = document.querySelector(".collection");
    if(e.target.textContent == "X"){
        if(confirm("Sure you want to delete")){
        ul.removeChild(e.target.parentElement);
        }
    }
}