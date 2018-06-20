'use strict';
var app = angular.module('sOrder.controllers',["ngDialog", 'ngMessages','ngAnimate', 'ui.bootstrap','uiSwitch','ngCookies','angular-clipboard']);

app.controller('showListCtrl', ['$scope',
    function ( $scope) {

        var config = {
            apiKey: "AIzaSyAc39X3s-whdcEsZOMXLUEDAmZXiFTHhKA",
            authDomain: "liquordb-81b20.firebaseapp.com",
            databaseURL: "https://liquordb-81b20.firebaseio.com",
            projectId: "liquordb-81b20",
            storageBucket: "liquordb-81b20.appspot.com",
            messagingSenderId: "431849979765"
        };

        firebase.initializeApp(config);
        var db = firebase.firestore();

        $scope.orderList = [{Invoicedate: "05/14/2018", invoiceNum: 1254322, liqName: "yellow tail", liqSize: "200ml", salesPerson: "Roxana"}];
        //debugger;
        // var promise = new Promise(function(resolve, reject) {
        //     db.collection("liquor").get().then(function (querySnapshot) {
        //         var oList = [];
        //         querySnapshot.forEach(function (doc) {
        //             oList.push(doc.data())
        //         })
        //         resolve(oList);
        //     })
        // })
        // promise.then(function(result){
        //     console.log(result)
        //     $scope.orderList = result;
        // })

        db.collection("liquor").get().then(function (querySnapshot) {
            var oList = [];
            querySnapshot.forEach(function (doc) {
                oList.push(doc.data())
            })
            $scope.orderList = oList;
        })


    }]);
