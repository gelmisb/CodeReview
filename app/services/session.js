import Ember from 'ember';

export default Ember.Service.extend({

  currentUser: null,
  isLoggedIn: Ember.computed.bool('currentUser'),
  store: Ember.inject.service(),


  // login(username, password){
  //   return new Promise((resolve, reject)=>{
  //     if (username === 'ember' && password === 'awesome'){
  //       this.get('store').findAll('user').then((response)=>{
  //          var user = response.get('firstObject')
  //          this.set('currentUser', user)
  //          Cookies.set('userId', user.id)
  //          resolve()
  //       })
  //     } else {
  //        reject("Username and password did not match")
  //      }
  // })
// }
});
