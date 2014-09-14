app.controller('TodoCtrl', function($scope) {
  $scope.saved = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) :
  [
    {
      task: 'Build todo app',
      done: false
    },
    {
      task: 'Update Portfolio',
      done: true
    }
  ];

  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.addTodo = function () {
    $scope.todos.push({
      task: $scope.todoTask,
      done: false
    });

    $scope.todoTask = "";

    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.updateTodo = function () {
    $scope.todos = $scope.todos;
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.removeTodo = function (todo) {
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
});