// Should be a method for retriving code from CodeMirror editor to this editor to show to the user that it has been completed
import Ember from 'ember';

export default Ember.Controller.extend({

  // Primary service injections
  localStorage: Ember.inject.service('localstorage'),
  session: Ember.inject.service('session'),

  // Actions
  actions: {

    // To sub code into the editor when the button is clicked
    updateValue() {

      // Initialising a session
      var session = this.get('session');

      // Getting content from the previous instance
      var content = $(".myTextarea").val();

      // Calling the editor
      var editor = $('.CodeMirror')[0].CodeMirror;

      // Setting a new editor's valuefrom the stored session
      var text = editor.setValue(session.currentCode);

    },

    changePage() {
      this.transitionToRoute('account');
    }
  },

});
