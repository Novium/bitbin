// Initiate Collections //
Pastes = new Mongo.Collection('Pastes');

// Collection Permissions //

// Pastes permissions:
// Insert/Remove: author only
// TODO: Add "banned" group and deny everything
Pastes.allow({
  insert: function(userId, doc) {
    return (userId && doc.author === userId);
  },
  remove: function(userId, doc) {
    return (userId && doc.author === userId);
  }
});

// DB Schemas //
var Schemas = {};

Schemas.Pastes = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 32
  },
  // Automatically set to the userId of the author
  // Fails if userId isn't set to prevent unauthorized inserts
  // Should not be automatically set if this isn't an insert
  author: {
    type: String,
    label: 'Author',
    autoValue: function() {
      if(Meteor.userId() && this.isInsert) {
        return Meteor.userId();
      } else {
        this.unset();
      }
    }
  },
  // TODO: Implement some kind of pagination/limiter
  // if chcount is over a certain value to prevent huge views
  content: {
    type: String,
    label: 'Paste'
  },
  // Basically enables/disables syntax highlighting
  code: {
    type: Boolean,
    label: 'Code'
  }
});

// Initiate schemas //
Pastes.attachSchema(Schemas.Pastes);

// Configuration //

AccountsTemplates.configure({
    // Behaviour
    enablePasswordChange: true,

    // Appearance
    
    // Not yet implemented
    // showForgotPasswordLink: true,

    // Enable in production to limit spam
    // showReCaptcha: true,

    // Privacy Policy and Terms of Use
    // Not yet implemented
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000
});
