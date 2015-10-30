angular.module("ngDreams")
        .controller("DreamController", function($scope, $http){
          $scope.dreamData = {};

          $scope.createDream = function(){
            $http.post("/api/dreams", $scope.dreamData)
              .then(function(response){
                console.log(response);
                $scope.dreamData = {};
              });
          };
        });
