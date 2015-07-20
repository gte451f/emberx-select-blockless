import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blockless-single');
  this.route('blockless-single-option-value');
  this.route('blockless-multiple');
});

export default Router;
