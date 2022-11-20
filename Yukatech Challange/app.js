let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value= "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = 'green';
    })


    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    clearToDo.addEventListener('click', function(){
        paragraph.style.display= 'none';
    })
})

