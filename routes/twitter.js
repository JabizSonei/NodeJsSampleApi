var express = require('express');
var request = require('request');
var twitterRouter = express.Router();

twitterRouter.get('/', function(req, res) {

  const requestProperties = 
  {
    url: 'https://api.twitter.com/oauth2/token',
    auth: 
    {
      username: process.env.TWITTER_USERNAME,
      password: process.env.TWITTER_PASSWORD
    },
    form:
    {
      grant_type: 'client_credentials'
    }
  }

  request.post(requestProperties, function (error, response, body) {
    const tokenResponse = JSON.parse(body);
    res.send('Token extracted from JSON: ' + tokenResponse.access_token);
  });
})

  module.exports = twitterRouter;

  