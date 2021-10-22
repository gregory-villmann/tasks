/*function lisame(){
let lisatavSona = document.getElementById('task').value;
let ul = document.getElementById("list");
let li = document.createElement("li");

li.appendChild(document.createTextNode(lisatavSona));
ul.appendChild(li);

}*/

const form = document.querySelector('form');
form.addEventListener('submit', addTask);


function addTask(event){
    const taskInput = document.querySelector('#task').value;

    // create list item
    const li = document.createElement("li");

    // add list item a class name so it would get the styling
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput));
    const ul = document.querySelector(".collection");
    ul.appendChild(li);


    event.preventDefault();
}