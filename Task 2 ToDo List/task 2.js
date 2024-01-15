window.addEventListener('load', () => {
    const form = document.querySelector('#task_add');
    const input = document.querySelector('#task_input');
    const input_date = document.querySelector('#date_input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        const date = input_date.value;

        if (!task) {
            alert('Please add a task');
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        const text_input = document.createElement('input');
        text_input.type = 'text';
        text_input.classList.add('text');
        text_input.value = task;
        task_content_el.appendChild(text_input);

        const date_input = document.createElement('input');
        date_input.type = 'date';
        date_input.classList.add('date');
        date_input.value = date;
        task_content_el.appendChild(date_input);

        task_el.appendChild(task_content_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('action');

    
        const edit_button = document.createElement('button');
        edit_button.classList.add('edit');
        edit_button.textContent = 'Edit Task';
        edit_button.addEventListener('click', () => {
            if (edit_button.textContent == 'Edit Task') {
                text_input.disabled = !text_input.disabled;
                date_input.disabled = !date_input.disabled;
                edit_button.textContent = 'Save Task';
            } else {
                
                edit_button.textContent = 'Edit Task';
            }
        });

        const delete_button = document.createElement('button');
        delete_button.classList.add('delete');
        delete_button.textContent = 'Delete Task';
        delete_button.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        task_action_el.appendChild(edit_button);
        task_action_el.appendChild(delete_button);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        input.value = '';
        input_date.value = '';
    });
});