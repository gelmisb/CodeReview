import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  actions: {
    login(){
      let {username, password} = this.getProperties('username', 'password');
      this.get('localStorage').login(username, password);
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
