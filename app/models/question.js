import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  notes: DS.attr(),
  text: DS.attr()
});
