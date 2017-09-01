(function(){
    angular.module('codersApp')
           .controller('userRepositoryController', userRepositoryController);

    userRepositoryController.$inject = ['$scope', 'userResource', "$stateParams"];

    function userRepositoryController($scope, userResource, $stateParams){
       $scope.name = 'teste';
       
       initialize();

       function initialize(){
           $scope.vm = {
               userName: $stateParams.user,
               name:'',
               numberRepository: 0,
               url: '',
               repository: [] 
           };

           var q = userResource.User.get({userName: $scope.vm.userName}).$promise;

           q.then(function(response){
                $scope.vm.name = response.name;
                $scope.vm.numberRepository = response.public_repos;
                $scope.vm.url = response.html_url;
                getRepository();
           });
       }

       function getRepository() {
           var q = userResource.User.repository({userName: $scope.vm.userName}).$promise;

           q.then(function(response){
               $scope.vm.repository = response;
           });
       }

       
    }
})();