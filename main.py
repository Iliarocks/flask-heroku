from flask import Flask, render_template, request
import tweepy
import os

def OAuth(consumer_key, consumer_secret, access_token, access_token_secret):
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    return auth

app = Flask(__name__)

@app.route('/')
def tweet():
    return render_template('tweet.html')

@app.route('/send-tweet')
def send_tweet():
    consumer_key = request.args.get('consumer-key')
    consumer_secret = request.args.get('consumer-secret')
    access_token = request.args.get('access-token')
    access_token_secret = request.args.get('access-token-secret')
    oauth = OAuth(consumer_key, consumer_secret, access_token, access_token_secret)
    api = tweepy.API(oauth)
    tweet = request.args.get('tweet')
    try:
        api.update_status(tweet)
        return render_template('sent.html', message='Your tweet has been posted!')
    except Exception as e:
        return render_template('sent.html', message="An error has occured: you've most likely already sent an identical tweet or have inserted invalid twitter tokens and keys")

if __name__ == '__main__':
    app.run(debug=True)
