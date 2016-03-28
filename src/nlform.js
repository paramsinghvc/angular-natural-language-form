angular.module('nlform', [])
	.directive('nlForm', function() {
		return {
			restrict: 'AE',
			replace: false,
			compile: function($el, $attrs) {
				$el.addClass('nl-form');
				return function($scope, $el, $attrs) {

				}
			}
		}
	})
	.directive('nlInput', ['$timeout', function($timeout) {
		return {
			restrict: 'AE',
			replace: false,
			scope: {
				placeholder: '@',
				type: '@',
				pattern: '@',
				values: '=',
				value: '='
			},
			template: '<div class="overlay" ng-click="toggleVisibility()" ng-class="{\'visible\' : toggle == true}"></div><span class="filler" ng-click="toggleVisibility($event)">{{placeholder}}</span><div class="combo" ng-class="{\'visible\' : toggle == true}"><ul><li ng-if="values" ng-click="selectVal(val)" ng-repeat="val in values">{{val}}</li></ul></div><div class="textfield" ng-if="value" ng-class="{\'visible\' : toggle == true}"><form ng-submit="selectVal(txtBoxVal)"><input type="text" ng-model="txtBoxVal" placeholder="{{placeholder}}" autofocus><button type="submit" class="submitBtn">&#8594;</button></form></div>',
			compile: function($el, $attrs) {
				return function($scope, $el, $attrs) {
					$scope.toggle = false;

					$scope.toggleVisibility = function(e) {
						$scope.toggle = !$scope.toggle;
						if (e)
							$el[0].querySelector('.combo').style.left = (e.pageX - 60) + 'px';
					}

					$scope.selectVal = function(val) {
						$scope.placeholder = val;
						$scope.toggle = false;
					}

					$timeout(function() {
						if (!!$scope.pattern) {
							$el[0].querySelector("input[type=text]").setAttribute('pattern', $scope.pattern);
						}
					});

					switch ($scope.type) {
						case "field":
						case "combo":
					}
				}
			}
		}
	}])
