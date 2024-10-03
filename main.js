const inputInsersion = document.getElementById('inputTaskInsertion');
const buttonInsertion = document.getElementById('buttonInsertion');
const container = document.getElementById('container');
const clear = document.getElementById('clear');
const buttonTask = document.getElementById('buttonTask');
const filter = document.getElementById('filter');
let running = false;

let item = [];





buttonInsertion.addEventListener('click', add_Remove_LineThrough_Task);
clear.addEventListener('click', clearTask);
filter.addEventListener('input', filterTask);

function add_Remove_LineThrough_Task() {
    if (inputInsersion.value.trim() != '') {
        const NewDiv = document.createElement('div');
        const NewP = document.createElement('p');
        const NewButton = document.createElement('button');
        NewDiv.classList.add('task');
        NewP.textContent = inputInsersion.value;
        NewP.classList.add('txt');
        NewButton.textContent = 'X';
        NewButton.classList.add('buttonTask');
        container.appendChild(NewDiv);
        NewDiv.appendChild(NewP);
        NewDiv.appendChild(NewButton);
        item.push(inputInsersion.value);
        inputInsersion.value = '';
        document.querySelectorAll('.txt').forEach(value =>
            value.addEventListener('click', () => {
                value.style.textDecoration = 'line-through';
            }
            )
        )
        removeTask();
        running = true;
    }

}

function removeTask() {
    document.querySelectorAll('.buttonTask').forEach(value =>
        value.addEventListener('click', () => {
            value.parentElement.remove();
        })
    )
    if (!document.querySelectorAll('.buttonTask').length) {
        running = false;
    }
}



function clearTask() {
    if (running) {
        if (confirm('are you sure ?')) {
            document.querySelectorAll('.task').forEach(value => {
                value.remove();
            })
        }
    }
}




function filterTask() {
   
    console.log(item.filter((value) => {
            return value == filter
    }))

}

let variable = 'badr';



