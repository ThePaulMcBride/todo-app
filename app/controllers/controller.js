app.controller('TodoCtrl', function($scope, dataFactory) {
  
  $scope.todos = dataFactory.getTodos();
  $scope.todoTask = "";

  $scope.addTodo = function () {
    if ($scope.todoTask !== '') {
      $scope.todos.push({
        task: $scope.todoTask,
        done: false
      });
    };

    $scope.todoTask = "";
    dataFactory.storeTodos();
  };

  $scope.updateTodo = function () {
    dataFactory.storeTodos();
  };

  $scope.removeTodo = function (todo) {
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
    dataFactory.storeTodos();
  };

  $scope.removeCompletedTodos = function() {
    for ( var i = $scope.todos.length - 1; i >=0; i--) {
      if ($scope.todos[i].done) {
        $scope.todos.splice(i, 1);
      };
    };
    dataFactory.storeTodos();
  };
});

app.factory('dataFactory', function () {
  var data = {};
  var saved = localStorage.getItem('todos');
  var todos = (saved !==null) ? JSON.parse(saved) :
  [
    {
      task: 'Make some Todos',
      done: false
    },
    {
      task: 'Complete some Todos',
      done: false
    }
  ];

  data.getTodos = function () {
    return todos;
  };

  data.storeTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return data;
});