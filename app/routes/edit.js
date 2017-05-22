// Contact route
import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service('session'),
    localStorage: Ember.inject.service('localstorage'),

});
