'use strict';
var app = angular.module('atList.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies','angular-clipboard']);

app.controller('AddToListCtrl', ['$scope','$rootScope', '$http', '$location', 'ngDialog', '$uibModal', '$window','clipboard',  
   function ( $scope,  $rootScope,   $http,   $location,   ngDialog,    uibModal,   $window,clipboard) {
       $scope.entry= null;
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

    $http.get('resources/data/liquorNames.json').success(function(data) {
        $scope.mapping = data;

    }).error(function(data){
      console.log(data);
    });
    $scope.selectLiquor = function( facilityList){
         //console.log(facilityList);
    };
    $scope.selectSalesPerson = function(person){
       //  console.log(person);
    };
       
    $scope.captureDate = function(date){
        angular.element("#invoiceDate").parent().addClass('floating-placeholder-float');
       // console.log(date);
    }
       
    $scope.addLiqToDB= function(isFormInvalid){
        if(isFormInvalid){
            $scope.submitted = true;
        }
       // angular.extend($scope.dbEntry, {'invoiceDate': isNaN($scope.dbEntry.invoiceDate)?$scope.dbEntry.invoiceDate : $scope.dbEntry.invoiceDate.getTime()});
        $scope.entry =$scope.dbEntry;
    }
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
}]);