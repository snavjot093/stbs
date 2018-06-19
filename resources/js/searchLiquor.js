'use strict';
var app = angular.module('searchLiquor.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies','angular-clipboard']);

app.controller('SliquorCtrl', ['$scope','$rootScope', '$http', '$location', 'ngDialog', '$uibModal', '$window','clipboard',  
   function ( $scope,  $rootScope,   $http,   $location,   ngDialog,    uibModal,   $window,clipboard) {
       $scope.liquorMapping= null;
//=======DATE OPTIONS==================       
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.status = {
      opened: false
    };
    //****Date picker options*****
    $scope.formats = ['MM/dd/yy','yyyy-MM-dd', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate','MM/dd/yyyy'];
    $scope.format = 'MM/dd/yy';//$scope.formats[0];
    $scope.open = function() {
        $scope.status.opened = true;
    };
    $scope.captureDate = function(date){
        var displayDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        if(date.getTime() <= 1483257600000){
            $scope.confirmationDailog("No results found for "+ displayDate, 420);
        }
     //   angular.element("#invoiceDate").parent().addClass('floating-placeholder-float');
       // console.log(date);
    }
    $http.get('resources/data/order.json').success(function(data) {
       $scope.mapping = data;
          
    }).error(function(data){
          console.log(data);
    });
    $scope.selectLiquor = function( facilityList){
        $scope.liquorMapping= null;
        if(facilityList !==null && facilityList !== undefined){
        var searchedInput = facilityList.toLowerCase().replace(/ +/g, "");
        
            $http.get('resources/data/liquor.json').success(function(data) {
                console.log(data);
                angular.forEach(data, function(val, key) {
                    if (key === searchedInput) {
                        $scope.liquorMapping= val;
                    }
                });

                $scope.propertyName = 'checkinDate';
                $scope.reverse = false;
                $scope.sortBy = function (propertyName) {
                    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
                    $scope.propertyName = propertyName;
                };
            }).error(function(data){
                console.log(data);
            });
        }
    };
}]);