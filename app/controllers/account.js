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

      var username1 = session.currentUser;

      var currentdate = new Date();
      var time = "Now: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " @ "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();

      let {username, myTextarea, title} = this.getProperties(username1, text, 'title');

      if(this.get('localStorage').addCode(username1, text, title, time)){
        this.transitionToRoute('submission');
        session.set('submitted', true);
      }

      return text;
    },

    modifyCode(title){
      var session = this.get('session');

      this.transitionToRoute('edit');

      var localStorage = this.get('localStorage');

      var codeStore = localStorage.getCode();

      var code = codeStore.findBy('title', title);

      session.set('editCode', code.myTextarea);

      session.set('currentTitle', code.title);

      console.log(session.editCode);

    },

    deleteThis(title){

      var localStorage = this.get('localStorage');

      var codeStore = localStorage.getCode();

      var code = codeStore.findBy('title', title);

      localStorage.removeCurrentObejct(code.title);

      this.transitionToRoute('account');

    },

  }

});
