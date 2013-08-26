'use strict';

/* Controllers */
var _scope;

angular.module(['ui.bootstrap']);


function StudentSearchCtrl($scope, $http) {
    //
    // If this were a real example, this would be using
    // a database/cached backend endpoint.
    //
    _scope = $scope;
    $http.get('/students-endpoint').success(function(data) {
       $scope.students = data.result;
    });

    // Sort by earliest graduating year (most likely to want to a job).
    $scope.orderProp = 'degreeYear';
}


/**
 * Programmatically updates the sorting order on the JSON
 * data returned for students.
 *
 * @param sortOption    JSON property to sort against
 */
function changeSort(sortOption) {
    _scope.orderProp = sortOption;
    $('[name=sortByField]').val(sortOption);//To select Blue

    select('sortByField').option('0');
}

StudentSearchCtrl.$inject = ['$scope', '$http'];