import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit(model) {
      model.save().then(
        () => {
          this.transitionTo('posts');
        }
      ).catch(
        () => {
          // what if the API call fails?
        }
      );
    }
  },
});
