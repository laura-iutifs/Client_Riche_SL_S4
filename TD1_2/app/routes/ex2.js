import Route from '@ember/routing/route';

import EmberObject from '@ember/object';
import { filterBy } from '@ember/object/computed';

let Services = EmberObject.extend({
  rappelPropositions: filterBy('proposition', 'active', true)
});

let services = Services.create({
  propositions: [
    { name: 'Web Development', prix: 300, active: true },
    { name: 'Design', prix: 400, active: true },
    { name: 'Integration' ,prix: 250, active: false },
    { name: 'Formation', prix: 220, active: false }
  ]
});

services.get('rappelPropositions');

export default Route.extend({
  model(){
    return Services.create({services: [
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ]})
  }
});
