var ClientOAuth2 = require('client-oauth2');

var githubAuth = new ClientOAuth2({
  clientId: 'abc',
  clientSecret: '123',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://example.com/auth/github/callback',
  scopes: ['notifications', 'gist']
})

// Install Browserify
npm install -g browserify
// Install client-oauth2
npm install client-oauth2 --save
// Convert oauth objects to 


// TODO: Set up oauth for all roberts
// TODO: Write tweet functions


// TODO: Hook HTML UI to core functiosn
// TODO: Add event listener from page

