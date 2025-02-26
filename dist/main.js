const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    const taskInput = inputBox.value;
    if(taskInput === ''){
        alert('Please enter a task');
        return;
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'li'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData(){
    let data = localStorage.getItem('data');
    if(data){
        listContainer.innerHTML = data;
    }
}

loadData();