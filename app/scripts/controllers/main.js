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
      $('#first').val($scope.selectedContact.first);
      $('#last').val($scope.selectedContact.last);
      $('#countryE').val($scope.selectedContact.country);
      $('#postcodeE').val($scope.selectedContact.postcode);
      $('#addressl1E').val($scope.selectedContact.addressl1);
      $('#addressl2E').val($scope.selectedContact.addressl2);
      $('#townE').val($scope.selectedContact.town);
      $('#countyE').val($scope.selectedContact.county);
    };

    $scope.edit = function(){

      var o = {
        first:$('#first').val(),
        last:  $('#last').val(),
        country: $('#countryE').val(),
        postcode:  $('#postcodeE').val(),
        addressl1: $('#addressl1E').val(),
        addressl2:$('#addressl2E').val(),
        town: $('#townE').val(),
        county:  $('#countyE').val()
      };
      var key = $('#first').val() + ' ' + $('#last').val();
      console.log($scope.selectedContact);

      console.log(localStorage[key]);
      localStorage.setItem(key , JSON.stringify(o));
      console.log(localStorage[key]);
      $scope.initContacts();
    };


  });