import Ember from 'ember';
import Folks from 'dummy/mixins/folks';

export default Ember.Controller.extend(Folks, {
  isDisabled: false,
  actions: {
    tagYouAreIt: function(object) {
      this.tagged = object;
    },
    removeFolk: function(folk) {
      this.get('folks').removeObject(folk);
    }
  }
});
