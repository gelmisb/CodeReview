import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'textarea',
  // className: 'myTextarea',

  didInsertElement() {
    this._super(...arguments);
    var editor = this.$()[0];
    var myCodeMirror = CodeMirror.fromTextArea(editor,{
      lineNumbers: true,
      theme: 'ambiance',
      firstLineNumber: 1,
      mode: 'javascript',
    });
  }

});
