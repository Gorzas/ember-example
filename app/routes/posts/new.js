import Ember from 'ember';

const {
  Route,
  get,
  set,
} = Ember;

export default Route.extend({
  model() {
    return get(this, 'store').createRecord('post', { });
  },

  actions: {
    submit(model) {
      set(model, 'createdAt', new Date());

      model.save().then(
        () => {
          this.modelFor('posts').unshiftObject(model);

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
