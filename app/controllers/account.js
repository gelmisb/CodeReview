import Ember from 'ember';

export default Ember.Controller.extend({

  localStorage: Ember.inject.service('localstorage'),

  actions: {
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('username'));
    }
  }

});
