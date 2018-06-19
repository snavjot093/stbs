'use strict';
var app = angular.module('cOrder.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies','angular-clipboard']);

app.controller('CorderCtrl', ['$scope','$rootScope', '$http', '$location', 'ngDialog', '$uibModal', '$window','clipboard',  
   function ( $scope,  $rootScope,   $http,   $location,   ngDialog,    uibModal,   $window,clipboard) {
        $scope.selected = [];
        $scope.toggle = function (item, size) {
            var idx = $scope.selected.indexOf(item+' - '+size);
            if (idx > -1)
                $scope.selected.splice(idx, 1);
            else
                $scope.selected.push(item+' - '+size);
        };
        $scope.isExists = function (item, size) {
            return $scope.selected.indexOf(item+' - '+size) > -1;
        };
      $scope.tableSubmit = function(table){
          if($scope.selected.length === 0){
              alert("hi");
          }
          else{
              console.log($scope.selected);
          }
      };
      
       
       
       
       $http.get('resources/data/order.json').success(function(data) {
       $scope.mapping = data;
          
    }).error(function(data){
          console.log(data);
    });
    

    
   }]);