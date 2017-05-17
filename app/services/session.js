import Ember from 'ember';

export default Ember.Service.extend({

  currentUser: null,
  currentCode: null,
  store: Ember.inject.service(),


});
