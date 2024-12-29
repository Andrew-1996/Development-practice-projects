document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        
        // Create a span to hold the task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        
        // Create the Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Create the Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.style.marginLeft = '10px';
        editBtn.addEventListener('click', () => {
            // Switch to editing mode
            const newTaskText = prompt('Edit your task:', taskText.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskText.textContent = newTaskText;
            }
        });

        // Append elements to the task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        
        // Add the task item to the list
        taskList.appendChild(taskItem);
        
        // Clear the input field
        taskInput.value = '';
    }
});
