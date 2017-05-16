import Ember from 'ember';

export default Ember.Service.extend({

    userStoreKey: 'users',
    codeStoreKey: 'code',
    currentUser: null,

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

      var user = userStore.findBy('username', username);

      if(user && user.password === password){
        alert('Thank you for loggin in ' + username);
           window.codeReview = 'user';
           this.set('currentUser', username)
           return true;
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
      var codeStore = this.getCode();

      codeStore.addObject({username:username, myTextarea:myTextarea});

      localStorage.setItem(this.codeStoreKey, JSON.stringify(codeStore));
    },


    getCode() {
      var codeStore = this.getCode();

      var code = codeStore.findBy('myTextarea', myTextarea);

      return code;
    }

});
