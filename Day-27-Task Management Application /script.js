document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = [];
    let editTaskId = null;


    displayTasks();


    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskTitle = document.getElementById('taskTitle').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskDueDate = document.getElementById('taskDueDate').value;

        if (!taskTitle || !taskDescription || !taskDueDate) {
            alert("Please fill out all fields.");
            return;
        }

        if (editTaskId === null) {

            const task = {
                id: Date.now(),
                title: taskTitle,
                description: taskDescription,
                dueDate: taskDueDate,
            };
            tasks.push(task);
        } else {

            tasks = tasks.map(task =>
                task.id === editTaskId
                    ? { id: task.id, title: taskTitle, description: taskDescription, dueDate: taskDueDate }
                    : task
            );
            editTaskId = null;
        }

        displayTasks();
        taskForm.reset();
    });

    // Display Tasks
    function displayTasks() {

        taskList.innerHTML = '';

        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div>   
                    <div class="task-header">
                        <strong>${task.title}</strong>
                        <div class="task-due-date">Due: ${task.dueDate}</div>
                    </div>
                    <div class="task-description">${task.description}</div>
                    <div class="button-container">
                        <button class="edit" data-id="${task.id}">Edit</button>
                        <button class="delete" data-id="${task.id}">Delete</button>
                    </div>
                </div>
            `;
            taskList.appendChild(li);
        });


        taskList.querySelectorAll('.edit').forEach(button => {
            button.addEventListener('click', () => editTask(parseInt(button.getAttribute('data-id'))));
        });

        taskList.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', () => deleteTask(parseInt(button.getAttribute('data-id'))));
        });
    }


    function editTask(id) {
        const task = tasks.find(task => task.id === id);

        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskDueDate').value = task.dueDate;

        editTaskId = id;
    }


    function deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(task => task.id !== id);

            displayTasks();
        }
    }
});
