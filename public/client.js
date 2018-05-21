var todos = ['dirst', 'seconds'];
function displayTodos(){
  console.log(todos);
}

function addTodo(todo){
  todos.push(todo);
  displayTodos();
}


function changeTodo(position, todo){
  todos[position] = todo;
  displayTodos();
}

