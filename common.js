// Initiate Collections
Pastes = new Mongo.Collection('Pastes');

// Collection Permissions

Pastes.allow({
  insert: function(userId, doc) {
    return (userId && doc.author === userId);
  },
  remove: function(userId, doc) {
    return (userId && doc.author === userId);
  }
});

// DB Schemas
var Schemas = {};

Schemas.Pastes = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 32
  },
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
  content: {
    type: String,
    label: 'Paste'
  },
  code: {
    type: Boolean,
    label: 'Code'
  }
});

// Initiate schemas
Pastes.attachSchema(Schemas.Pastes);

// Configuration

AccountsTemplates.configure({
    // Behaviour
    enablePasswordChange: true,

    // Appearance
    showForgotPasswordLink: true,
    showReCaptcha: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000
});
