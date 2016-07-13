angular.module('todoController',[])

  .controller('mainController',['$scope','$http','Todos', function($scope,$http,Todos) {
    $scope.formData = {};
    $scope.loading = true;

    Todos.get()
      .success(function(data){
        console.log(data,'lalala')
        $scope.todos = data;
        $scope.loading = false;
      });

  }])
