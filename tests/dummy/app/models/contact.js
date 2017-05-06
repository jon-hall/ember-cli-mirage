import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  age: attr('number'),
  email: attr('string'),
  blocked: attr('boolean'),
  lastContacted: attr('date'),
  notes: attr(),

  address: belongsTo('address')
});
