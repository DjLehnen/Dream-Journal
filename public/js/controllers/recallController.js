angular.module("ngDreams")
        .controller("RecallController", function($scope, $http){
            $scope.dreams = [];
            $http.get("/api/dreams")
                .then(function(response){
                  $scope.dreams = response.data;
                  // var totalArray = response.data;
                  // $scope.totalItems = totalArray.length;
                  // console.log($scope.totalItems);
                  console.log($scope.dreams);


                  // $scope.itemsPerPage = 10;
                  // $scope.currentPage = 1;
                  // $scope.pageCount = function () {
                  //     return Math.ceil($scope.totalItems / $scope.itemsPerPage);
                  //   };
                  // $scope.totalItems.$promise.then(function(){
                  //     $scope.watch('currentPage + itemsPerPage', function(){
                  //       var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                  //         end = begin + $scope.itemsPerPage;
                  //     });
                  // });
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

        // app.controller('contentCtrl', function ($scope, friendsFactory) {
        //
        //
        //   $scope.friends.$promise.then(function () {
        //     $scope.$watch('currentPage + itemsPerPage', function() {
        //       var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        //         end = begin + $scope.itemsPerPage;
        //
        //       $scope.filteredFriends = $scope.friends.slice(begin, end);
        //     });
        //   });
        // });
