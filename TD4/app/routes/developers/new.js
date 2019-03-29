import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
  },

  actions:{
    save(dev){
    //  let dev=model.copy;
      dev=this.store.createRecord("developer", dev.copy);
      dev.save().then(this.transitionTo("developers"));
    }
  }
});
