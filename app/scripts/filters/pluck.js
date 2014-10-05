'use strict';

/**
 * @ngdoc filter
 * @name contactsAppApp.filter:pluck
 * @function
 * @description
 * # pluck
 * Filter in the contactsAppApp.
 */
angular.module('contactsAppApp')
  .filter('pluck', function ($) {

    return function (input, letters) {
  		console.log('filter param letters: '+letters);
      if(!letters){
        letters = 'AZ';
        return input;
      }
      var a = letters.charCodeAt(0);
      var b = letters.charCodeAt(1);
  	
      return $.map(input, function(obj){
          var first, last;
          first = obj.first[0].toUpperCase().charCodeAt(0);
          last = obj.last[0].toUpperCase().charCodeAt(0);
          if( (first>=a && first <=b) || (last>=a && last<=b)){
            return obj;
          }
        
      });
    };
  });
