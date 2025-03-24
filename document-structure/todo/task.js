document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('task__input');
    const taskList = document.getElementById('tasks__list');
    const form = document.getElementById('tasks__form');

    function addTask(taskText) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task__title">${taskText}</div>
            <a href="#" class="task__remove">&times;</a>
        `;

        task.querySelector('.task__remove').addEventListener('click', (event) => {
            event.preventDefault();
            task.remove();
        });

        taskList.appendChild(task);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value.trim() !== '') {
            addTask(input.value.trim());
            input.value = '';
        }
    });
});