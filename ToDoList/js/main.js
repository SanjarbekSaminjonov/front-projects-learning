const addForm = document.getElementById('add-form');
const inputTodo = document.getElementById('input-todo');
const todoList = document.getElementById('todo-list');

function addItem() {
    const newItem = document.createElement('li');
    newItem.setAttribute('class', 'todo-item');
    newItem.textContent = inputTodo.value;

    todoList.appendChild(newItem);
    inputTodo.value = "";
    inputTodo.focus();
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputTodo.value != "") {
        addItem();
    }
    inputTodo.focus();
});

todoList.addEventListener('click', (e) => {
    const item = e.target;
    if (item.classList[1] === 'done') {
        item.classList.remove('done');
    } else {
        item.classList.add('done');
    }
    inputTodo.focus();
});

todoList.addEventListener('dblclick', (e) => {
    const item = e.target;
    todoList.removeChild(item);
    inputTodo.focus();
});



