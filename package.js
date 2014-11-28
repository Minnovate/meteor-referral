Package.describe({
  name: 'denisl:referral',
  summary: 'A easy to use referral system for Meteor.',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('denisl:referral.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('denisl:referral');
  api.addFiles('denisl:referral-tests.js');
});
