// COntroller for handling login action for the user
import Ember from 'ember';

export default Ember.Controller.extend({

  // Injecting primary services
  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  // initialising action methods
  actions: {
    login(){

      // Calling session
      var session = this.get('session');

      // Getting the wanted variables and putting them inside local variables
      let {username, password} = this.getProperties('username', 'password');

      // Getting the localstorage service and sending wanted parameters to its method for processing
      if(this.get('localStorage').login(username, password)){

        // Then opening acces to the account root
        this.transitionToRoute('account');
      }
    },
  },

});
