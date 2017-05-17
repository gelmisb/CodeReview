// Controller that is used for registering users and storing them within browser's local storage
import Ember from 'ember';

export default Ember.Controller.extend({

  // Initial service injections
  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  // Actions and methods are defined here
  actions: {

    // Register method that takes in user's parameters and sends them to localstorage service
    register(){

      // Getting local parameters
      let {username, password, email} = this.getProperties('username', 'password', 'email');

      // Sending local params to a service handling method for processing
      this.get('localStorage').addUser(username, password, email);

      // Re-directing user to a login page
      this.transitionToRoute('login');
    }
  },

});
