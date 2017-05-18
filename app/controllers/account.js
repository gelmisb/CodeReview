// Account controller for handling account template and its actions
import Ember from 'ember';

export default Ember.Controller.extend({

  // Primary service injections
  localStorage: Ember.inject.service('localstorage'),
  session: Ember.inject.service('session'),

  // Ations a place to initialise method calls and template actions
  actions: {
    getMirrorCode(){
      var session = this.get('session');
      var content = $(".myTextarea").val();
      var editor = $('.CodeMirror')[0].CodeMirror;
      var text = editor.getValue(content);
      var username1 = 'common';

      let {username, myTextarea} = this.getProperties(username1, text);

      if(this.get('localStorage').addCode(username1, text)){
        this.transitionToRoute('submission');
      }
      return text;
    },

  }

});
