import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),
  
  actions: {
    login(){
      let {username, password} = this.getProperties('username', 'password');

      if(this.get('localStorage').login(username, password))
      {
        this.transitionToRoute('account');
      }
    }
  },

});
