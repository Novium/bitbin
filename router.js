Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', function () {
  this.render('home');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/show', function () {
  this.render('show');
});



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
