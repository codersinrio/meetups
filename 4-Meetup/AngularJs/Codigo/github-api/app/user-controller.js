(function(){
    angular.module('codersApp')
           .controller('userController', userController);

    userController.$inject = ['$scope', 'userResource'];

    function userController($scope, userResource){
       
       initialize();

       $scope.buscarUsuario = function(){
            console.log($scope.vm.userName);
            userResource.User.search({q:$scope.vm.userName})
            .$promise
            .then(function(response){
                $scope.vm.results = response.items;
            });
       }

       function initialize(){
           
           $scope.vm = {
               userName: '',
               results: []
           };
       }


    }
})();