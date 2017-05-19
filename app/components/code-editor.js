// CodeMirror API, for editing and reviewing code within a browser
import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  // Setting tagname for the component
  tagName: 'textarea',

  // Classname so it could be recognised
  className: 'myTextarea',

  // Helps initialising libraries and components
  didInsertElement() {

    var session = this.get('session');

    // Calling self
    var self = this;
    this._super(...arguments);

    // Setting ediitor to be this instance
    var editor = this.$()[0];

    // Intialising the CodeMirror object
    var myCodeMirror = CodeMirror.fromTextArea(self.$().get(0),{
      value: self.get('value'),
      lineNumbers: true,
      lineWrapping: true,
      theme: 'ambiance',
      firstLineNumber: 1,
      mode: 'javascript',
    });

    this.set("editor", myCodeMirror);
  },


});
