'use strict';

var mainApp = angular.module("studentSearch", []);

/* Controllers */
function StudentSearchCtrl($scope, $http) {
    //
    // If this were a real example, this would be using
    // a database/cached backend endpoint.
    //
    $http.get('/students-endpoint').success(function(data) {
       $scope.students = data.result;
    });

    // Sort by earliest graduating year (most likely to want to a job).
    $scope.queryPerson = "";
    $scope.orderProp = 'degreeYear';
}

// Extra filter for not showing entries when search field is empty.
mainApp.filter("filterBlank", function(){ return function(object, query) {
    if (!query) {
        $('example-data').css('display', 'block');
        return {};
    } else {
        $('example-data').css('display', 'none');
        return object;
    }

}});

StudentSearchCtrl.$inject = ['$scope', '$http'];