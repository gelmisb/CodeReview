// Should be a method for retriving code from CodeMirror editor to this editor to show to the user that it has been completed
import Ember from 'ember';

export default Ember.Controller.extend({

  // Primary service injections
  localStorage: Ember.inject.service('localstorage'),
  session: Ember.inject.service('session'),

  // Actions
  actions: {
    updateValue: function(){

      /***THIS IS FOR FUTURE REFFERENCE***/
      // var self = this;
      // var session = this.get('session');
      // var content = $(".myTextarea").val();
      // var codemirror = $('.CodeMirror')[0].CodeMirror;
      // var text = editor.getValue(content + '/n');
      
    },
 },
});
