'use strict';

(function() {
    angular.module('accordianApp').controller('accordianController', function($scope) {
        $scope.accordianList = [{
                'title': 'Accord item #',
                'desc': 'First accordian'
            },
            {
                'title': 'Accord item #',
                'desc': 'Second accordian'
            },
            {
                'title': 'Accord item #',
                'desc': 'Second accordian'
            },
            {
                'title': 'Accord item #',
                'desc': 'Second accordian'
            }
        ];

        //toggle accordians
        $scope.open = function(indx) {
            for (var i = 0; i < $scope.accordianList.length; i++) {
                if (i == indx) {
                    $scope.accordianList[i].open = !$scope.accordianList[i].open;
                } else {
                    $scope.accordianList[i].open = false;
                }
            }
        }
    });
}());