app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {
      task: 'Build todo app',
      done: false
    },
    {
      task: 'Update Portfolio',
      done: true
    }
  ];


});