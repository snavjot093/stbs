angular.module('job-app', ['ngRoute', 'ngLoadingSpinner', 'lz-job.controllers','pay.controllers','payslip.controllers', 'cOrder.controllers', 'searchLiquor.controllers','atList.controllers','whiskey.controllers','rum.controllers','wine.controllers','vodka.controllers',
  'tequila.controllers',                         'ui.multiselect']).
    config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    	
    	$httpProvider.defaults.cache = false;
        if (!$httpProvider.defaults.headers.get)
          $httpProvider.defaults.headers.get = {};

        // disable IE Ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

        $routeProvider.when('/home',   {templateUrl: 'view/home.jsp', 	controller: 'HomeCtrl'});
        $routeProvider.when('/payroll',   {templateUrl: 'view/payroll.jsp', 	controller: 'PayrollCtrl'});
        $routeProvider.when('/payslip',   {templateUrl: 'view/payslip.jsp', 	controller: 'PayslipCtrl'});
        $routeProvider.when('/createOrder',   {templateUrl: 'view/createOrder.jsp', 	controller: 'CorderCtrl'});
        $routeProvider.when('/searchLiquor',   {templateUrl: 'view/searchLiquor.jsp', 	controller: 'SliquorCtrl'});
        $routeProvider.when('/addToList',   {templateUrl: 'view/addToList.jsp', 	controller: 'AddToListCtrl'});
         
        $routeProvider.when('/whiskey',   {templateUrl: 'view/whiskey.jsp', 	controller: 'WhiskeyCtrl'});
         $routeProvider.when('/wine',   {templateUrl: 'view/wine.jsp', 	controller: 'WineCtrl'});
         $routeProvider.when('/rum',   {templateUrl: 'view/rum.jsp', 	controller: 'RumCtrl'});
        $routeProvider.when('/vodka',   {templateUrl: 'view/vodka.jsp', 	controller: 'VodkaCtrl'});
        $routeProvider.when('/tequila',   {templateUrl: 'view/tequila.jsp', 	controller: 'TequilaCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    
    }]);
