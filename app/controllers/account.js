import Ember from 'ember';

export default Ember.Controller.extend({

  localStorage: Ember.inject.service('localstorage'),

  actions: {
    addCode(){
        var content = $("#content").val();
        var editor = $('.CodeMirror')[0].CodeMirror;

        let {username, text = editor.getValue(content)} = this.getProperties('username', 'text');
        alert(text + '  ' + username);

        if(this.get('localStorage').addCode(username, text)){
          this.transitionToRoute('index');
        }
    },

  }

});
