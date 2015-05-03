Template.pasteList.helpers({
  pastes: function() {
    return Pastes.find();
  },
  highlight: function() {
    if(this.code) {
      return '<pre><code>' + hljs.highlightAuto(this.content).value + '</pre></code>';
    } else {
      return '<pre><code>' + this.content + '</pre></code>';
    }
  }
});

Template.pasteList.onCreated(function() {
  Meteor.subscribe('ownPastes');
});
