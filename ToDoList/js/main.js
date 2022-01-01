const addForm = document.getElementById('add-form');
const inputTodo = document.getElementById('input-todo');
const todoList = document.getElementById('todo-list');

const oldTodos = JSON.parse(localStorage.getItem('todos'));
let activeTodos = Array();
// if (oldTodos) {
//     activeTodos = [...oldTodos]
// }

// console.log(activeTodos);
// for (const todo of activeTodos) {
//     addItemToList(todo);
// }

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemText = inputTodo.value;
    if (itemText) {
        addItemToList(itemText);
        addItemToStorage(itemText);
    }
    inputTodo.focus();
});


// todoList.addEventListener('click', (e) => {
//     const item = e.target;
//     item.classList.toggle('done');
//     inputTodo.focus();
// });
// todoList.addEventListener('dblclick', (e) => {
//     const item = e.target;
//     todoList.removeChild(item);
//     inputTodo.focus();
// });


function addItemToList(itemText) {
    const newItem = document.createElement('li');
    newItem.classList.add('todo-item');
    newItem.textContent = itemText;
    todoList.appendChild(newItem);
}

function addItemToStorage(itemText) {
    activeTodos.push(itemText);
    localStorage.setItem('todos', JSON.stringify(activeTodos));
}
