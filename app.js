let message = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todos = document.querySelector('.todos');

let todo_list = [];

if(localStorage.getItem('todo')) {
    todo_list = JSON.parse(localStorage.getItem('todo'));
    addMessage();
}

addButton.addEventListener('click', function(){
    let new_todo = {
        todo: message.value,
        checked: false
    };
    if (message.value) {
    todo_list.push(new_todo);
    addMessage();
    localStorage.setItem('todo', JSON.stringify(todo_list));
    }
});

function addMessage() {
    let addMessage = '';
    todo_list.forEach(function(item, index){
        addMessage += `
        <li id='todo_${index}'>
            <input class='checkbox' type='checkbox' id='todo_${index}' ${item.checked ?  'checked': ''}>
            <label class='label' for='todo_${index}'>${item.todo}</label>
        </li>`;

        todos.innerHTML = addMessage;
    });
    message.value = '';
};

todos.addEventListener('change', function(event){
    let valueLabel = todos.querySelector('[for='+ event.target.getAttribute('id') + ']').innerHTML;
    
    todo_list.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todo_list));
        }
    });
});
