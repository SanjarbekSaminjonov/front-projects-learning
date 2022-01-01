const addForm = document.getElementById('add-form');
const inputTodo = document.getElementById('input-todo');
const todoList = document.getElementById('todo-list');


// set old items list to document 
const oldTodos = JSON.parse(localStorage.getItem('todos'));
let activeTodos = Array();
if (oldTodos) {
    activeTodos = [...oldTodos];
}
activeTodos.forEach((todo) => {
    addItemToList(todo);
});


// add new item
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemText = inputTodo.value.trim();
    if (itemText) {
        const item = {
            title: itemText,
            is_done: false,
        };
        addItemToList(item);
        addItemToStorage(item);
    }
    inputTodo.value = "";
    inputTodo.focus();
});


// set is_done true or false
todoList.addEventListener('click', (e) => {
    const item = e.target;
    if (item.classList[0] == "todo-item") {
        item.classList.toggle('done');
        const _item = {
            title: item.textContent,
            is_done: item.classList[1] == "done"
        }
        doneOrNotDone(_item);
    }
});


// delete item from document and storage
todoList.addEventListener('dblclick', (e) => {
    const item = e.target;
    if (item.classList[0] == "todo-item") {
        todoList.removeChild(item);
        deleteItem(item.textContent);
    }
});


function addItemToList(item) {
    const newItem = document.createElement('li');
    newItem.classList.add('todo-item');
    if (item.is_done) {
        newItem.classList.add('done');
    }
    newItem.textContent = item.title;
    todoList.prepend(newItem);
}

function updateStorage() {
    localStorage.setItem('todos', JSON.stringify(activeTodos));
}

function getItemIndex(itemText) {
    let index = -1;
    for (index = 0; index < activeTodos.length; index++) {
        if (activeTodos[index].title == itemText) {
            break;
        }
    }
    return index;
}

function addItemToStorage(item) {
    activeTodos.push(item);
    updateStorage();
}

function deleteItem(itemText) {
    let index = getItemIndex(itemText);
    activeTodos.splice(index, 1);
    updateStorage();
}

function doneOrNotDone(item) {
    let index = getItemIndex(item.title);
    activeTodos[index] = item;
    updateStorage();
}