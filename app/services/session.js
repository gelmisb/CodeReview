import Ember from 'ember';

export default Ember.Service.extend({

  currentUser: null,
  currentCode: null,
  currentTitle: null,
  editCode: null,
  submitted: false,
  store: Ember.inject.service(),


});
