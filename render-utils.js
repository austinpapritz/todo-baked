export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    const divEl = document.createElement('div');
    const todoP = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (handleComplete) {
        divEl.classList.add('complete');
    } else {
        divEl.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoP.classList.add('todo');
    // put the todo's text into the p tag
    todoP.textContent = todo;
    // append stuff
    divEl.append(todoP);
    // add event listener for click and call handleComplete function
    divEl.addEventListener('click', () => {
        handleComplete();
    });
    // return the div
    return divEl;
}
