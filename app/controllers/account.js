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

      // var dt = new Date();
      // var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

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
      }
      return text;
    },

    // modifyCode(){
    //
    //   console.log(title);
    //   // this.get('localStorage').modify(title);
    // },

    remove(){

      let {title} = this.getProperties('title');

      // var codeType = this.getProperties(title);

      console.log(title);
      // this.get('localStorage').modify(title);
    },

  }

});
