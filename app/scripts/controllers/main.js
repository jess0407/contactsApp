'use strict';

angular.module('contactsAppApp')
  .controller('MainCtrl', function($scope, $){

    $scope.keygen = function(){
      var num = Math.random();
      console.log(num);
      return Math.floor(num*100000000);
    };

    $scope.initContacts = function (){
      $scope.contacts = [];
      $.map(localStorage, function(value){
        if(typeof JSON.parse(value) === 'object'){
          $scope.contacts.push(JSON.parse(value));
        }
      });
    };

    $scope.newAddress = function(){
      var key =  $scope.keygen();
      var o = {
        first:$scope.firstName,
        last: $scope.lastName,
        country: $scope.country,
        postcode: $scope.postcode,
        addressl1: $scope.addressl1,
        addressl2:$scope.addressl2 ,
        town: $scope.town,
        county: $scope.county,
        oid: key
      };
      localStorage.setItem(key, JSON.stringify(o));
      $scope.contacts.push(o);
      console.log('key is  '+key);
    };

    $scope.selectContact = function(id) {
      $scope.selectedContact = this.contact;
      $('#first').val($scope.selectedContact.first);
      $('#last').val($scope.selectedContact.last);
      $('#countryE').val($scope.selectedContact.country);
      $('#postcodeE').val($scope.selectedContact.postcode);
      $('#addressl1E').val($scope.selectedContact.addressl1);
      $('#addressl2E').val($scope.selectedContact.addressl2);
      $('#townE').val($scope.selectedContact.town);
      $('#countyE').val($scope.selectedContact.county);
      if(!$scope.contacts[id].selected){
        $scope.contacts[id].selected = true;
      } else {
        $scope.contacts[id].selected = false;
      }
    };

    $scope.edit = function(){
      var key = $scope.selectedContact.oid;
      var o = {
        first:$('#first').val(),
        last:  $('#last').val(),
        country: $('#countryE').val(),
        postcode:  $('#postcodeE').val(),
        addressl1: $('#addressl1E').val(),
        addressl2:$('#addressl2E').val(),
        town: $('#townE').val(),
        county:  $('#countyE').val(),
        oid: key
      };
      localStorage.setItem(key , JSON.stringify(o));
      $scope.initContacts();
    };


  });