(function(){
   var app = angular.module('codersApp', ['ngResource', 'ui.router']); 

   app.config(function($stateProvider){
        
        $stateProvider.state('inicio', {
            url: '',
            templateUrl: 'app/template/user.html',
            controller: 'userController'
        });
    
        $stateProvider.state('repository', {
            url: '/:user/repository',
            templateUrl: 'app/template/user-repository.html',
            controller: 'userRepositoryController',
        });

   });

     


})();