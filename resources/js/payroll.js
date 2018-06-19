'use strict';
var app = angular.module('pay.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies','angular-clipboard']);

app.controller('PayrollCtrl', ['$scope','$rootScope', '$http', '$location', 'ngDialog', '$uibModal', '$window','clipboard',  
   function ($scope,  $rootScope,   $http,   $location,   ngDialog,    uibModal,   $window,clipboard) {
      $scope.taxHours = 160;
      var todaysDate = new Date();
      var displayDate = (todaysDate.getMonth() + 1) + '/' + todaysDate.getDate() + '/' + todaysDate.getFullYear();
      $scope.taxableIncome = 160 * 13.5 ;
 $scope.paramvirsPay = function(hours){
     $scope.hoursTotal=hours;
     $scope.cashRate = 11;
     $scope.taxableCash = 2900;
     $scope.cashHours =$scope.hoursTotal -$scope.taxHours;
     $scope.cashMoney =$scope.cashHours *$scope.cashRate;
     //$scope.leftHours =$scope.hoursTotal -scope.taxHours;
      
     $scope.totalCash=$scope.taxableIncome+$scope.cashMoney;
      //$scope.nonTaxableIncome =$scope.cashHours *$scope.cashRate;
     $scope.totalIncome =$scope.taxableIncome +$scope.cashMoney;
     $scope.finalAmount=$scope.totalIncome-$scope.taxableCash ;
     $scope.paramvirTotalPay =$scope.totalIncome -$scope.taxableCash ;
     $scope.paramvirChecks= " cash and two checks of 1179.51";
      
      var test= '<div ng-class="appliedClass(paramvir)" class="w3-cell w3-cell-top w3-card-4 w3-round">\
                    <header class="w3-container w3-blue w3-center w3-round">\
                        <h4>Paramvir Singh <span class="w3-right-align w3-tiny">'+displayDate+'</span></h4>\
                    </header>\
                    <div class="w3-container">\
                    <div><u>Total hours</u> ='+$scope.hoursTotal +'</div>\
                    <div><u>Taxable hours</u> x 13.5 <mark>(160 x 13.5 = 2,160)</mark></div>\
                    <div>Cashable hours = Total hours ('+$scope.hoursTotal +') - Taxable hours<mark>(160)</mark> =  <mark>'+$scope.cashHours +'</mark></div>\
                    <div>Cash = '+$scope.cashHours +' x '+$scope.cashRate +' = '+$scope.cashMoney +'</div>\
                    <div>2160 + '+$scope.cashMoney +' = ('+$scope.totalCash +' - '+$scope.taxableCash +') =\
                    <p class="w3-panel w3-border w3-border-blue">$'+$scope.paramvirTotalPay +''+$scope.paramvirChecks +'</p></div>\
                </div>';
      angular.element('#paramvir').empty();
      angular.element('#paramvir').append(test);
  } 
  //scope.dynamicPopover7 = {templateUrl: 'targetEnv'};
 $scope.sandeepPay = function(hours){
     $scope.hoursTotal=hours;
     $scope.cashRate = 11;
     $scope.taxableCash = 2900;
     $scope.cashHours =$scope.hoursTotal -$scope.taxHours;
     $scope.cashMoney =$scope.cashHours*$scope.cashRate;
     //$scope.leftHours =$scope.hoursTotal -$scope.taxHours;
      
     $scope.totalCash=$scope.taxableIncome+$scope.cashMoney;
     $scope.nonTaxableIncome =$scope.cashHours *$scope.cashRate;
     $scope.totalIncome =$scope.taxableIncome +$scope.nonTaxableIncome;
     $scope.finalAmount=$scope.totalIncome-$scope.taxableCash ;
     $scope.sandeepTotalPay =$scope.totalIncome -$scope.taxableCash ;
     $scope.sandeepChecks= " cash and two direct deposits of 1106.50";
      var test= '<div ng-class="appliedClass(paramvir)" class="w3-cell w3-cell-top w3-card-4 w3-round">\
                    <header class="w3-container w3-blue w3-center w3-round">\
                        <h4>Sandeep Singh <span class="w3-right-align w3-tiny">'+displayDate+'</span></h1>\
                    </header>\
                    <div class="w3-container">\
                        <div><u>Total hours</u> ='+$scope.hoursTotal +'</div>\
                        <div><u>Taxable hours</u> x 13.5 <mark>(160 x 13.5 = 2,160)</mark></div>\
                        <div>Cashable hours = Total hours ('+$scope.hoursTotal +') - Taxable hours<mark>(160)</mark> =  <mark>'+$scope.cashHours +'</mark></div>\
                        <div>Cash = '+$scope.cashHours +' x '+$scope.cashRate +' = '+$scope.cashMoney +'</div>\
                        <div>2160 + '+$scope.cashMoney +' = ('+$scope.totalCash +' - '+$scope.taxableCash +') =\
                        <p class="w3-panel w3-border w3-border-blue">$'+$scope.sandeepTotalPay +''+$scope.sandeepChecks +'</p></div>\
                    </div>\
                </div>';
      angular.element('#sandeep').empty();
      angular.element('#sandeep').append(test);
      
  } 
  /*scope.waynePay = function(hours){
     $scope.wayneTotalPay= hours * 11 ;  
  }  
    */   
   }]);
