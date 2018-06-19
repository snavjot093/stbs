'use strict';
var app = angular.module('payslip.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies','angular-clipboard']);

app.controller('PayslipCtrl', ['$scope','$rootScope', '$http', '$location', 'ngDialog', '$uibModal', '$window','clipboard',  
   function ( $scope,  $rootScope,   $http,   $location,   ngDialog,    uibModal,   $window,clipboard) {
       $scope.lastFour = 2741;
       $scope.employeeName ='Paramvir Singh';
       
   }]);