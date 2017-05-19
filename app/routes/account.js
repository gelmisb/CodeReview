// Account route with seesion input
import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  model() {

    var codeStore = this.get('localStorage').getCode();

    var code = this.get('localStorage').getCode("code");

    return code;

  }

});
