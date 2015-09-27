import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    update(question, params){
      Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key,params[key]);
          }
        });
        question.save();
        this.transitionTo('question');
      },
    delete(question){
      if(confirm("Are you sure you want to delete this question?")){
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo('question', params.question);
    }
  }
});
