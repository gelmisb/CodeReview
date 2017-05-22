// Should be a method for retriving code from CodeMirror editor to this editor to show to the user that it has been completed
import Ember from 'ember';

export default Ember.Controller.extend({

  // Primary service injections
  localStorage: Ember.inject.service('localstorage'),
  session: Ember.inject.service('session'),
  submission: Ember.inject.controller('submission'),

  // Actions
  actions: {

    modifyCode(title){
      var localStorage = this.get('localStorage');
      var session = this.get('session');
      session.set('submitted', false);
      var codeStore = localStorage.getCode();

      var code = codeStore.findBy('title', title);

      // Getting content from the previous instance
      var content = $(".myTextarea").val();

      // Calling the editor
      var editor = $('.CodeMirror')[0].CodeMirror;

      // Setting a new editor's valuefrom the stored session
      var text = editor.setValue(session.editCode);

      console.log(session.editCode);

    },

    // To sub code into the editor when the button is clicked
    updateValue() {
      var localStorage = this.get('localStorage');
      var session = this.get('session');

      var codeStore = localStorage.getCode();

      var code = codeStore.findBy('title', session.currentTitle);

      localStorage.modify(code);

      var content = $(".myTextarea").val();
      var editor = $('.CodeMirror')[0].CodeMirror;
      var text = editor.getValue(content);

      var username1 = session.currentUser;

      var currentdate = new Date();
      var time = "Now: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " @ "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();

      let {username, myTextarea} = this.getProperties(username1, text);

      if(this.get('localStorage').addCode(username1, text, session.currentTitle, time)){
        this.transitionToRoute('account');
      }
    },
  }

});
