import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  title: attr(),

  subtitle: attr({ mirage: () => 'THE SUBTITLE' }),
  content: attr({ mirage: (faker) => faker.lorem.words(200) }),
  publishedAt: attr('date', { mirage: (faker) => faker.date.past() }),
  lastEditedAt: attr('date', {
    mirage(faker) {
      return faker.date.between(this.publishedAt, new Date());
    }
  }),

  wordSmith: belongsTo()

});
