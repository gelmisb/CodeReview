import Ember from 'ember';

export default Ember.Service.extend({

    userStoreKey: 'users',
    codeStoreKey: 'code',
    currentUser: null,
    session: Ember.inject.service('session'),

    // ------------------------------
    // User methods for local storage

    getusers(){
      var userStoreStr = localStorage.getItem(this.userStoreKey);
      if(userStoreStr){
        return JSON.parse(userStoreStr);
      } else {
        return [];
      }
    },

    addUser(username, password, email){
      var userStore = this.getusers();

      userStore.addObject({username:username, password:password, email:email});

      localStorage.setItem(this.userStoreKey, JSON.stringify(userStore));

      return alert('Welcome ' + username);
    },

    login(username, password){
      var userStore = this.getusers();
      var session = this.get('session');
      var user = userStore.findBy('username', username);

      if(user && user.password === password){
           session.set('currentUser', username);
           console.log(session.currentUser);
           return session.currentUser;
       } else {
        alert('Sorry invalid username or password!')
      }
    },


    // ------------------------------
    // Methods for storing user's submitted code and reviewing it
    getCode(){
      var codeStoreStr = localStorage.getItem(this.codeStoreKey);
      if(codeStoreStr){
        return JSON.parse(codeStoreStr);
      } else {
        return [];
      }
    },

    addCode(username, myTextarea){
      var session = this.get('session');

      session.set('currentCode', myTextarea);

      console.log(session.currentCode);

      return session.currentCode;
    },


    getCodes() {
      var codeStore = this.getCode();

      var code = codeStore.findBy('myTextarea', myTextarea);

      return code;
    }

});
