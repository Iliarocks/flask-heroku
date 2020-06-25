var tweetBox = document.querySelector('#tweet-box');
var tweetBtn = document.querySelector('#tweet');
var goHomeBtn = document.querySelector('#go-home');
var consumerKeyIn = document.querySelector('#consumer-key');
var consumerSecretIn = document.querySelector('#consumer-secret');
var accessTokenIn = document.querySelector('#access-token');
var accessTokenSecretIn = document.querySelector('#access-token-secret');

try {
  //send tweet
  tweetBtn.addEventListener('click', function(e) {
    var tweetToSend = tweetBox.value;
    var consumerKey = consumerKeyIn.value;
    var consumerSecret = consumerSecretIn.value;
    var accessToken = accessTokenIn.value;
    var accessTokenSecret = accessTokenSecretIn.value;
    if (tweetToSend === '' || accessTokenSecret === '' || consumerSecret === '' || accessToken === '' || accessTokenSecret === '') return;
    window.location = `${window.origin}/send-tweet?tweet=${tweetToSend}&consumer-key=${consumerKey}&consumer-secret=${consumerSecret}&access-token=${accessToken}&access-token-secret=${accessTokenSecret}`;
  })
} catch (e) {
  goHomeBtn.addEventListener('click', function(e) {
    window.location = window.origin;
  })
} finally {

}

console.log('hello')