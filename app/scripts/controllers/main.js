'use strict';

angular.module('contactsAppApp')
  .controller('MainCtrl', function($scope, $){
    $scope.contacts = [];
    $.map(localStorage, function(value){
      if(typeof JSON.parse(value) === 'object'){
        $scope.contacts.push(JSON.parse(value));
      }
    });
    $scope.newAddress = function(){
      console.log($scope.firstName+' '+$scope.lastName);
      var name = $scope.firstName+' '+$scope.lastName;
      var o = {
        first:$scope.firstName,
        last: $scope.lastName,
        country: $scope.country,
        postcode: $scope.postcode,
        addressl1: $scope.addressl1,
        addressl2:$scope.addressl2 ,
        town: $scope.town,
        county: $scope.county
      };
      

      localStorage.setItem(name, JSON.stringify(o));
      console.log (JSON.parse(localStorage.getItem('Jessie Shi')));
    };
  });