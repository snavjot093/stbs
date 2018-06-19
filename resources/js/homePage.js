/* global angular */

'use strict';

/* Controllers */

var app = angular.module('lz-job.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies']);

/*app.run(function($rootScope, $templateCache, $http, $cookies) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
});*/
app.run(function($rootScope, $templateCache, $http, $cookies,$window,ngDialog) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
  /*  $rootScope.$on('IdleTimeout', function() {
        $window.location.href = 'index.html';
    });
    
    $rootScope.$on('IdleStart', function() {
        ngDialog.open({
                template: 'warning-dialog.html',
                className: 'ngdialog-theme-default',
                showClose: false,
                escape: true,
                closeByEscape: true
        });
    });
    
    $rootScope.$on('IdleEnd', function() {
        ngDialog.close();
    });
      
    Idle.watch();  */
      
});

//Home Controller
app.controller('HomeCtrl', ['$scope', '$http', '$window', '$location',  'ngDialog','$rootScope',
    function ($scope, $http, $window, $location, ngDialog, $rootScope) {
        $scope.init = function() {
//=========== COMMON MODAL DAILOG FOR THROUGH-OUT THE APP ======================
            $scope.confirmationDailog= function(responseMessage,responseStatus, newPath){
                ngDialog.openConfirm({
    		        template:'<div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>\
                                  </div></div></div>',
    			       /* <div class="modal-body" style="text-align:center; color:#2aabd2;">'+
    	                '<h4>'+ responseMessage + '</h4>'+
    	                '</div>'+
                        ' <br\>\
                        <div class="ngdialog-buttons">\
                           <!--button type="button" class="ngdialog-button btn-warning" ng-click=confirm("cancel")>Cancel</button-->\
                           <button type="button" class="ngdialog-button ngdialog-button-primary" style="margin: 0 20px 20px;" ng-click=confirm("ok")>OK</button>\
                        </div>',*/
                    className: 'ngdialog-theme-default',
                    plain: true,
                    showClose: false,
                    escape: true
                }).then(function(value) {
                    if(responseStatus === 200){
                        $location.path(newPath);
                    }
                    else if (responseStatus === 300){
                        $route.reload();
                    }
                    else if (responseStatus === 420){
                    }
                    else{
                        error($scope.errorHandler);
                    }
                });
            };

        }; //=======END OF INIT();
       //$scope.activeMenu = 'Payroll';
        $scope.home = function() {
           $location.path('/home');
		}; 
       $scope.payroll = function() {
           $location.path('/payroll');
		}; 
       $scope.payslip = function() {
           $location.path('/payslip');
		}; 
            
       $scope.createOrder=function() {
           $location.path('/createOrder');
		}; 
        $scope.searchLiquor=function() {
           $location.path('/searchLiquor');
		}; 
        $scope.addToList=function() {
           $location.path('/addToList');
		}; 
        $scope.whiskey = function() {
           $location.path('/whiskey');
		};
        $scope.rum = function() {
           $location.path('/rum');
		};
        $scope.wine = function() {
           $location.path('/wine');
        }
        $scope.vodka = function() {
           $location.path('/vodka');
        }
        $scope.tequila = function(){
            $location.path('/tequila');
        }
     $scope.errorHandler = function (data) {
            ngDialog.openConfirm({ template: '\
                <p></p><p><font size="3"> ' + data.message + '</font></p>\
                <p><font size="3"> ' + (data.details !== null ? data.details : '') +'</font></p><p></p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click=confirm("OK")>OK</button>\
                </div>',
                className: 'ngdialog-theme-default', plain: true, showClose: false, escape: true
            }).then(function(value) {
                $window.location.href = 'login.jsp';
            });   
        };
        /* $scope.dynamicPopover = {
            templateUrl: 'popoverTemplate1'
        };
        */
     
		
        
}]);
//============JUST FOR THE LABELS===================
    function updateText(event) {
        $scope.input = $(event.target);
        setTimeout(function () {
            $scope.val = $scope.input.val();
            if ($scope.val !== "") {
                $scope.input.parent().addClass("floating-placeholder-float");
            } else {
                $scope.input.parent().removeClass("floating-placeholder-float");
            }
        }, 1);
    };
    angular.element(".formField-div input").keydown(updateText);
    angular.element(".formField-div input").change(updateText);
   /* $scope.pasted=function(){
       setTimeout(function(){
            angular.element(".formField-div").addClass('floating-placeholder-float');
        },500);
    };*/
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 //console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 //console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});