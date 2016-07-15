angular.module('todoService',[])

  .factory('Todos',['$http',function($http) {
    return {
      get : function() {
        return $http.get('/get');
      },
      add : function(todo) {
        console.log(todo,'todooo')
				return $http.post('/add/', todo);
			},
      remove : function(id) {
        return $http.delete('/delete/'+id)
      }
    }
  }])
