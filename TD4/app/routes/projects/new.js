import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
  },

  actions:{
    save(projects){
    //  let dev=model.copy;
      projects=this.store.createRecord("project", projects.copy);
      projects.save().then(this.transitionTo("projects"));
    }
  }
});
