import Ember from 'ember';

export default Ember.Service.extend({

    userStoreKey: 'users',

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
        this.transitionToRoute('pricing');
      } else {
        alert('Sorry invalid username or password!')
      }
    }
});
