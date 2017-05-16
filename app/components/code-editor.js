import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'textarea',

    callMirror: function(){
      var myCodeMirror = CodeMirror.fromTextArea(myTextArea);
  }

});
