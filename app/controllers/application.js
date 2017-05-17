//This application controller looks after user's log out action
import Ember from 'ember';

export default Ember.Controller.extend({
  // Injecting sessions
  session: Ember.inject.service('session'),

  // Calling actions
  actions: {
    logout(){
      // Calling session
      var session = this.get('session');
      // Re-setting session vaiables
      session.set('currentUser', null);
      session.set('currentCode', null);
      // And sending the user to initial root, which is index
      this.transitionToRoute('index');
    },
  },
});
