import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  actions: {
    register(){
      let {username, password, email} = this.getProperties('username', 'password', 'email');
      this.get('localStorage').addUser(username, password, email);
    }
  },

  transitionToPreviousRoute(){
    var previousTransition = this.get('previousTransition');
    if (previousTransition) {
      this.set('previousTransition', null);
      previousTransition.retry();
    } else {
      // Default back to homepage
      this.transitionToRoute('index');
    }
  }

});
