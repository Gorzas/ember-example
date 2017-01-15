import Ember from 'ember';

const {
  Route,
  get,
} = Ember;

export default Route.extend({
  model() {
    return get(this, 'store').createRecord('post', {});
  },

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
