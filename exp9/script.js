
var app = angular.module("hospitalApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/register", {
        templateUrl: "register.html",
        controller: "RegistrationController"
    })
    .when("/doctors", {
        templateUrl: "doctors.html"
    })
    .when("/contact", {
        templateUrl: "contact.html"
    })
    .otherwise({
        redirectTo: "/"
    });

});

app.controller("MainController", function ($scope) {
    // Main application controller
});

app.controller("RegistrationController", function ($scope) {

    $scope.patient = {};
    $scope.registered = false;

    $scope.registerPatient = function (form) {

        if (form.$invalid) {
            return;
        }

        $scope.registeredPatient = angular.copy($scope.patient);
        $scope.registered = true;

        $scope.patient = {};
        form.$setPristine();
        form.$setUntouched();
    };

});
