var tweetBox = document.querySelector('#tweet-box');
var tweetBtn = document.querySelector('#tweet');
var goHomeBtn = document.querySelector('#go-home');
var consumerKeyIn = document.querySelector('#consumer-key');
var consumerSecretIn = document.querySelector('#consumer-secret');
var accessTokenIn = document.querySelector('#access-token');
var accessTokenSecretIn = document.querySelector('#access-token-secret');

function setKeysTokens() {
  localStorage.setItem('consumer_key', consumerKeyIn.value);
  localStorage.setItem('consumer_secret', consumerSecretIn.value);
  localStorage.setItem('access_token', accessTokenIn.value);
  localStorage.setItem('access_token_secret', accessTokenSecretIn.value);
}

function getKeysTokens() {
  consumerKeyIn.value = localStorage.getItem('consumer_key');
  consumerSecretIn.value = localStorage.getItem('consumer_secret');
  accessTokenIn.value = localStorage.getItem('access_token');
  accessTokenSecretIn.value = localStorage.getItem('access_token_secret');
}

try {
  //send tweet
  tweetBtn.addEventListener('click', function(e) {
    var tweetToSend = tweetBox.value;
    var consumerKey = consumerKeyIn.value;
    var consumerSecret = consumerSecretIn.value;
    var accessToken = accessTokenIn.value;
    var accessTokenSecret = accessTokenSecretIn.value;
    if (tweetToSend === '' || accessTokenSecret === '' || consumerSecret === '' || accessToken === '' || accessTokenSecret === '') return;
    fetch(`${window.origin}/send-tweet?tweet=${tweetToSend}&consumer-key=${consumerKey}&consumer-secret=${consumerSecret}&access-token=${accessToken}&access-token-secret=${accessTokenSecret}`)
      .then(() => {
        tweetBox.value === ''
        setKeysTokens()
      })
  })
} catch (e) {
  goHomeBtn.addEventListener('click', function(e) {
    window.location = window.origin;
  })
}

document.body.onload = getKeysTokens;