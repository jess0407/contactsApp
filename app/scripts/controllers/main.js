'use strict';

angular.module('contactsAppApp')
  .controller('MainCtrl', function($scope, $){
    $scope.contacts = [];

    var pluck = function(letters){
      var a = letters.charCodeAt(0);
      var b = letters.charCodeAt(1);

      while($scope.contacts.length>0){
        $scope.contacts.pop();
      }

      return $.map(localStorage, function(obj){
        if(typeof JSON.parse(obj) === 'object'){
          var first, last;
          first = JSON.parse(obj).first[0].toUpperCase().charCodeAt(0);
          last = JSON.parse(obj).last[0].toUpperCase().charCodeAt(0);

          if( (first>=a && first <=b) || (last>=a && last<=b)){
            $scope.contacts.push(JSON.parse(obj));
            return obj;
          }
        }
      });
    };

    $scope.keygen = function(){
      var num = Math.random();
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

    $scope.filter = function(letters){
      $('ul.navlist li').removeClass('selected');

      switch(letters){
        case 'AE':
          console.log('AE');
          $('#ae').addClass('selected');
          pluck('AE');
          break;
        case 'FK':
          console.log('FK');
          break;
        case 'LP':
          console.log('LP');
          break;
        case 'QV':
          console.log('QV');
          break;
        case 'WZ':
          console.log('WZ');
          break;
        case 'ALL':
          console.log('ALL');
          break;
      }
    };

  });