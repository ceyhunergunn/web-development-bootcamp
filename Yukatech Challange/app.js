// Gerekli ID'ler çağırıldı.

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

// ADD butonuna tek tıklama ile gerçekleştirelecek işlem ayarlandı.
addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value= "";

    //Eklenen aktivite üzerine tek tıkla üst çizme ve renk değişme işlemi yapıldı.
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = 'green';
    })

    //Eklenen aktivite üzerine çift tıkla silme işlemi yapıldı.
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

    //CLEAR butonuna tek tıklama ile silme işlemi yapıldı.
        //display = none ile tamamen silinmedi.
        //ekranda gizlendi.
    clearToDo.addEventListener('click', function(){
        paragraph.style.display= 'none';
    })
})

