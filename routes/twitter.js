var express = require('express');
var request = require('request');
var twitterRouter = express.Router();

twitterRouter.get('/', function(req, res) {

  var requestProperties = 
  {
    url: 'https://api.twitter.com/oauth2/token',
    auth: 
    {
      username: '',
      password: ''
    },
    form:
    {
      grant_type: 'client_credentials'
    }
  }

  request.post(requestProperties, function (error, response, body) {
    var errorMsg = 'error:' + error;
    var statusCodeMsg = 'statusCode:' + response.statusCode;
    var bodyMsg = 'body:' + body;
    res.send(errorMsg + '|' + statusCodeMsg + "|" + bodyMsg);
  });
})

  module.exports = twitterRouter;

  