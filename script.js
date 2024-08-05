document.addEventListener('DOMContentLoaded', () => {
    const addtodotext = document.getElementById('todolist_entry');
    const addtodoBu = document.getElementById('add_todo');
    const addtodolist = document.getElementById('Addtodolist');

    addtodoBu.addEventListener('click', () => {
        const todotexxt = addtodotext.value.trim();
        if (todotexxt !== '') {
            additem(todotexxt);
            addtodotext.value = ''; // Clear input field after adding item
        }
    });

    addtodotext.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const todoadd2 = addtodotext.value.trim();
            if (todoadd2 !== '') {
                additem(todoadd2);
                addtodotext.value = ''; // Clear input field after adding item
            }
        }
    });

    function additem(text) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const span = document.createElement('span');
        span.textContent = text;
        todoItem.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            addtodolist.removeChild(todoItem);
        });
        todoItem.appendChild(deleteButton);

        addtodolist.appendChild(todoItem);
    }
});
