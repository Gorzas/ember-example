import Ember from 'ember';

const {
  get,
  Route,
} = Ember;

export default Route.extend({
  model() {
    return get(this, 'store').findAll('post', { reload: true }).then(
      (collection) => collection.sortBy('createdAt').reverse()
    );
  },

  actions: {
    delete(post) {
      post.destroyRecord().then(
        () => {
          this.modelFor('posts').removeObject(post);
        }
      ).catch(
        () => {
          // what if the API call fails?
        }
      );
    },
  },
});
