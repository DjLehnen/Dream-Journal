angular.modules("ngDreams", ["ngRoute"]);

angular.module("ngRoute")
        .config(function($routeProvider){
            $routeProvider
            .when("/dreamform",{
              templateUrl:"html/dreamform.html"
              controller:"DreamController"
            })
            .when("/Recall"{
              templateUrl:"html/recall.html"
              controller:"RecallController"
            })
            .otherwise(
                redirectTo:"/dreamform"
            )
        });
