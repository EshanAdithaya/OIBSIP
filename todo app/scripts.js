document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const pendingTasks = document.getElementById('pending-tasks');

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        completeTask(taskItem);
    });

    taskItem.appendChild(completeButton);
    pendingTasks.appendChild(taskItem);
}

function completeTask(taskItem) {
    const completedTasks = document.getElementById('completed-tasks');
    taskItem.removeChild(taskItem.querySelector('button'));
    completedTasks.appendChild(taskItem);
}

function toggleTheme() {
    const calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark');
    const toggler = document.querySelector('.theme-toggler');
    toggler.classList.toggle('active');
}
