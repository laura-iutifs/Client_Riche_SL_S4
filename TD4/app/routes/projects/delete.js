import Route from '@ember/routing/route';
import EmberObject, {set} from "@ember/object";

export default Route.extend({
  afterModel(model){
    let copy = EmberObject.create(model.toJSON());
    set(model, 'copy', model);
    return model;
  },

  actions:{
    cancelDeletion(){
      this.transitionTo("projects");
    },
    confirmDeletion(pro){
      pro.destroyRecord().then(this.transitionTo("projects"));
    }
  }
});
