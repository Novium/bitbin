Meteor.publish("ownPastes", function(){
  return Pastes.find({author: this.userId});
});
