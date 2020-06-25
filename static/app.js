var tweetBox = document.querySelector('#tweet-box');
var tweetBtn = document.querySelector('#tweet');
var goHomeBtn = document.querySelector('#go-home');

try {
  //send tweet
  tweetBtn.addEventListener('click', function(e) {
    var tweetToSend = tweetBox.value;
    if (tweetToSend === '') return;
    window.location = `${window.origin}/send-tweet?tweet=${tweetToSend}`;
  })
} catch (e) {
  goHomeBtn.addEventListener('click', function(e) {
    window.location = window.origin;
  })
} finally {

}

console.log('hello')