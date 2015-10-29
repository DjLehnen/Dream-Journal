angular.module("ngDreams", ["ngRoute"]);

angular.module("ngRoute")
        .config(function($routeProvider){
            $routeProvider
            .when("/home",{
              templateUrl:"html/home.html",
              controller:"HomeController"
            })
            .when("/dreamform",{
              templateUrl:"html/dreamform.html",
              controller:"DreamController"
            })
            .when("/recall",{
              templateUrl:"html/recall.html",
              controller:"RecallController"
            })
            .otherwise({
                redirectTo:"/home"
            });
        });
angular.module("ngDreams")
        .controller("HomeController", function($scope){

        });

angular.module("ngDreams")
        .controller("DreamController", function($scope, $http){

        });

angular.module("ngDreams")
        .controller("RecallController", function($scope, $http){

        });
