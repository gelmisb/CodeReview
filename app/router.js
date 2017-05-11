import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pricing');
  this.route('register');
  this.route('login');
  this.route('tnc');
  this.route('contact');
  this.route('account');
  // this.route('account', { path: '/account/:user_id' });
  this.route('submission');
});

export default Router;
