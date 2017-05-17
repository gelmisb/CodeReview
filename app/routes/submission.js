// Submission route with session service injections
import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

});
