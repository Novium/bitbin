// Router configuration //

Router.configure({
  layoutTemplate: 'layout'
});

// Routes //

Router.route('home', {
  path: '/'
});

Router.route('login', {
  path: '/login'
});

// Show paste
Router.route('show', {
  path: '/show'
});

// Create paste (advanced)
Router.route('new', {
  path: '/new'
});
