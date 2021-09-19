const todoNameBtn = document.querySelector("#namesubmit");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

// event listener below
todoNameBtn.addEventListener('click', inputTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)



//function
function inputTodo(event) {
    //prevent form from submitting 
    event.preventDefault();
    let personName = prompt('input your name to continue')
    let todoListName = (`${personName} Todo List`)
    

    if (personName == '' || personName == null || personName > 0) {
        alert('Please input a Valid Name ')
    }else {
        let textDisplay = document.getElementById('Changename').innerText = todoListName
    }
}

function addTodo(event) {
    event.preventDefault();
    let todoDiv = document.createElement('div');
    todoDiv.className = 'todo'

    

    let newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.className = 'todo-item'
    todoDiv.appendChild(newTodo)

    // check mark button 
    let completebutton = document.createElement('button')
    completebutton.className = ('complete-btn')
    completebutton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completebutton)


     // delete button 
     let deletebutton = document.createElement('button')
     deletebutton.className = 'delete-btn'
     deletebutton.innerHTML = '<i class="fas fa-trash"></i>'
     todoDiv.appendChild(deletebutton)

     todoList.appendChild(todoDiv)
    todoInput.value = ' '

}

function deleteCheck(e) {
    let item = e.target
    //DELETE TODO
    if (item.className === 'delete-btn'){
        let todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    // CHECKMARK TODO
    if (item.className === 'complete-btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}


function filterTodo(e) {
    let todos = todoList.childNodes;
    todos.forEach (function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                }else {
                    todo.style.display = "none"
                }
                break
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                }else {
                    todo.style.display = "none"
                }
                break
        }
    })
}