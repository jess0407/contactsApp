'use strict';

/**
 * @ngdoc service
 * @name contactsAppApp.contactsService
 * @description
 * # contactsService
 * Service in the contactsAppApp.
 */
angular.module('contactsAppApp')
  .service('contactsService', function contactsService($) {
    // AngularJS will instantiate a singleton by calling "new" on this function

      var getContacts = function () {
        var arr = [];
        $.map(localStorage, function(value){
          if(typeof JSON.parse(value) === 'object'){
            arr.push(JSON.parse(value));
          }
        });
        return arr;
      };

      this.contacts = getContacts();
      this.letters = 'AZ';

      this.getContactsByLetters = function (letters) {
        this.letters = letters;
        var a = letters.charCodeAt(0);
        var b = letters.charCodeAt(1);
        var arr = localStorage;
        var filtered =  $.map(arr, function(obj){
            var first, last, o;
            o = JSON.parse(obj);
            first = o.first[0].toUpperCase().charCodeAt(0);
            last = o.last[0].toUpperCase().charCodeAt(0);

            if( (first>=a && first <=b) || (last>=a && last<=b)){
              return o;
            }
        });

        this.contacts = filtered;

      };

  });
