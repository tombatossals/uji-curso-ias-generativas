let taskCounter = 0; // Contador de tareas

document.getElementById('add-task').addEventListener('click', function () {
    addTaskFromInput();
});

document.getElementById('new-task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTaskFromInput();
    }
});

function addTaskFromInput() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
}

function addTask(taskText) {
    taskCounter++; // Incrementar el contador de tareas
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
            <span>${taskCounter}. ${taskText}</span>
            <div class="task-buttons">
                <button class="task-button" onclick="editTask(this)">Editar</button>
                <button class="task-button" onclick="deleteTask(this)">Eliminar</button>
            </div>
        `;
    taskList.appendChild(taskItem);
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').innerText;
    const newTaskText = prompt('Editar tarea:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
    updateTaskNumbers(); // Actualizar los números de las tareas después de eliminar una
}

function updateTaskNumbers() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.getElementsByTagName('li');
    taskCounter = 0; // Reiniciar el contador de tareas
    for (let i = 0; i < tasks.length; i++) {
        taskCounter++;
        const taskText = tasks[i].querySelector('span').innerText;
        const taskTextWithoutNumber = taskText.substring(taskText.indexOf(' ') + 1);
        tasks[i].querySelector('span').innerText = `${taskCounter}. ${taskTextWithoutNumber}`;
    }
}