// Submission route with session service injections
import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),
  localStorage: Ember.inject.service('localstorage'),

  // // To sub code into the editor when the button is clicked
  // model() {
  //   // Initialising a session
  //   var session = this.get('session');
  //
  //   // Calling the editor
  //   var editor = $('.CodeMirror')[0].CodeMirror;
  //
  //   // Setting a new editor's valuefrom the stored session
  //   var text = editor.setValue(session.currentCode);
  // }

  // 
  // // To sub code into the editor when the button is clicked
  // model() {
  //
  //   // Initialising a session
  //   var session = this.get('session');
  //
  //   // Getting content from the previous instance
  //   var content = $(".myTextarea").val();
  //
  //   // Calling the editor
  //   var editor = $('.CodeMirror')[0].CodeMirror;
  //
  //   // Setting a new editor's valuefrom the stored session
  //   var text = editor.setValue(session.currentCode);
  //
  // },
});
