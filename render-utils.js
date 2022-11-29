export function renderTodo(todo) {
    // create a div and a p tag
    const divEl = document.createElement('div');
    const todoP = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        divEl.classList.add('complete');
    } else {
        divEl.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoP.classList.add('todo');
    // put the todo's text into the p tag
    todoP.textContent = todo.todo;
    // append stuff
    divEl.append(todoP);
    // add event listener for click and call handleComplete function

    // return the div
    return divEl;
}
