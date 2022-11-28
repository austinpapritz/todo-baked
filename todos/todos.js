import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');
    todoForm.reset();

    const newDo = await createTodo(todo);
    if (newDo) {
        displayTodos();
    } else {
        todosEl.textContent = 'Something went wrong adding a todo';
    }
});

// create todo state
let todos = [];

window.addEventListener('load', async () => {
    await fetchAndDisplayTodos();
});

// add async complete todo handler function
async function handleComplete() {
    // call completeTodo
    completeTodo();
    // swap out todo in array
    // call displayTodos
    await fetchAndDisplayTodos();
}

async function fetchAndDisplayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos,
    // call render function, pass in state and complete handler function!
    // append to .todos
    let todos = await getTodos();
    if (todos) {
        for (let todo of todos) {
            const todoEl = renderTodo(todo, handleComplete);
            todosEl.append(todoEl);
        }
    }
}

// fetch the todos and store in state
// call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
