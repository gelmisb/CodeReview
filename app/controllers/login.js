import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  // username: localStorage.findBy('username', username),


  actions: {
    login(){
      let {username, password} = this.getProperties('username', 'password');

      if(this.get('localStorage').login(username, password))
      {
        this.transitionToRoute('account');
      }
    },

    getCurrentUser(){
      let {username} = this.getProperties('username');

      return this.get('localStorage').getUser(username);
    }
  },

});
