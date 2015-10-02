import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswerForm() {
      this.set("newAnswerForm", true);
    },


  saveAnswer(question) {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        date: new Date(),
        question: this.get('question')
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
