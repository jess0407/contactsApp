'use strict';

angular.module('contactsAppApp')
  .controller('MainCtrl', function($scope, $){

    $scope.initContacts = function (){
      $scope.contacts = [];
      $.map(localStorage, function(value){
        if(typeof JSON.parse(value) === 'object'){
          $scope.contacts.push(JSON.parse(value));
        }
      });

      $('.contact').click(function(){
        console.log('click');
      });
    };

    $scope.newAddress = function(){
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
      $scope.contacts.push(o);
    };

    $scope.selectContact = function() {
      $scope.selectedContact = this.contact;
      $scope.selected = true;
    };

    $scope.edit = function(){

    };


  });