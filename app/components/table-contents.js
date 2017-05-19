// CodeMirror API, for editing and reviewing code within a browser
import Ember from 'ember';

export default Ember.Component.extend({

  localStorage: Ember.inject.service('localstorage'),

  // Setting tagname for the component
  tagName: 'tr',

  // Classname so it could be recognised
  className: 'row',


  // // Helps initialising libraries and components
  // didReceiveAttrs() {
  //
  //   // Arguments for initialising
  //   this._super(...arguments);
  //
  //   var userStore = this.get('localStorage').getusers();
  //
  //   var users = this.get('localStorage').getusers("users");
  //
  //   // users.forEach(function(item) {
  //   //   console.log(item.username);
  //   //   item.username;
  //   // }, users)
  //
  //
  //
  //   console.log(users);
  //
  //
  //   return users;
  //
  //   // return new Array(parseInt(users));
  //
  // },

});
