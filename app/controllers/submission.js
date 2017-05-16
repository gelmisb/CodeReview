import Ember from 'ember';

export default Ember.Controller.extend({

  localStorage: Ember.inject.service('localstorage'),

  actions: {
    getCode(){
      let {username, myTextarea} = this.getProperties('username', 'myTextarea');

      if(this.get('localStorage').login(username, myTextarea))
      {
        alert(myTextarea);
      }
    },

    getCurrentUser(){
      let {username} = this.getProperties('username');

      return this.get('localStorage').getUser(username);
    }
  },

});
