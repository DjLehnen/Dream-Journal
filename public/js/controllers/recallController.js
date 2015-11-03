angular.module("ngDreams")
        .controller("RecallController", function($scope, $http){
            $scope.dreams = [];
            $http.get("/api/dreams")
                .then(function(response){
                  $scope.dreams = response.data;
                  console.log($scope.dreams);
                });
            $scope.removeDream = function(dream){
              $http.delete("/api/dreams/" + dream._id)
                .then(function(dream){
                  $http.get("/api/dreams")
                    .then(function(response){
                       $scope.dreams = response.data;
                    });
                  });
            };
        });
