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

    const nasaRequestProperties = 
    {
      url: 'https://api.twitter.com/1.1/search/tweets.json?q=nasa',
      auth:
      {
        bearer: tokenResponse.access_token
      }
    }
    request.get(nasaRequestProperties, function (error, response, body) {
      res.send(body);
    });    
  });
})

module.exports = twitterRouter;