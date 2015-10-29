angular.module("ngDreams", ["ngRoute"]);

angular.module("ngRoute")
        .config(function($routeProvider){
            $routeProvider
            .when("/dreamform",{
              templateUrl:"html/dreamform.html",
              controller:"DreamController"
            })
            .when("/recall",{
              templateUrl:"html/recall.html",
              controller:"RecallController"
            })
            .otherwise({
                redirectTo:"/dreamform"
            });
        });
