angular.module('todoService',[])

  .factory('Todos',['$http',function($http) {
    return {
      get : function() {
        return $http.get('http://ufefjxepqq.localtunnel.me/get/');
      }
    }
  }])
