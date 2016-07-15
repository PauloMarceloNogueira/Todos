angular.module('todoController',[])
  .controller('mainController',['$scope','$http','Todos', function($scope,$http,Todos) {
    $scope.formData = {};
    $scope.loading = true;
    Todos.get()
      .success(function(data){
        $scope.todos = data;
        $scope.loading = false;
      });

    $scope.AddTodo = function(data){
      console.log(data)
      Todos.add(data)
    }

    $scope.RemoveTodo = function(data) {
      Todos.remove(data)
    }

    $scope.ChangeStatus = function(data) {
      console.log('aqui')
      if($scope.class === 'nocomplete') {
        $scope.class = 'complete';
      }else{
        $scope.class = 'nocomplete';
      }

    }

  }])
