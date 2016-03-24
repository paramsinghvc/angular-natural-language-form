angular.module('myApp', ['nlform'])
	.controller('indexController', function($scope) {
        $scope.list = ['Chinese', 'Thai', 'Tex Mex', 'Italian', 'Indian'];
        $scope.genreList = ['rock', 'pop', 'metal', 'electronic', 'synth'];
        $scope.city = "New Delhi";
        $scope.dob = "02/04/1994";
	})

angular.bootstrap(document, ['myApp'])
