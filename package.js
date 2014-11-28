Package.describe({
  name: 'denisl:referral',
  summary: 'An easy to use referral system for Meteor.',
  version: '1.0.0',
  git: 'https://github.com/DenLes/meteor-referral.git'
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

// Our NPM dependencies.
Npm.depends({

});
