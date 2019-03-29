import Route from '@ember/routing/route';

import EmberObject, {set} from "@ember/object";

export default Route.extend({
  afterModel(model){
    let copy = EmberObject.create(model.toJSON());
    set(model, 'copy', model);
    return model;
  },

  actions:{
    storyNew(pro_id){
      this.transitionTo("story/new/pro_id");
    }
  }
});
