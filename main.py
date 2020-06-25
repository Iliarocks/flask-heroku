from flask import Flask, render_template, request
import tweepy
import os
consumer_key = 'dRzzqvP2ronqIe3lSiOHg3hLC'
consumer_secret = '3Qw3dffDyUHPRirNgBzmNMjTIAmuoXTf3Y5y6mpvNixPHu9h6C'
access_token = '1163471772722847748-7IiOpJNJMCg9EQiKTX2eD4ihdMpmLc'
access_token_secret = 'xelpYWILujObf4Ec5zTN2FS80ANxpQgqe1DBzrbWLVJRy'
def OAuth():
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    return auth

app = Flask(__name__)

@app.route('/')
def tweet():
    return render_template('tweet.html')

@app.route('/send-tweet')
def send_tweet():
    oauth = OAuth()
    api = tweepy.API(oauth)
    tweet = request.args.get('tweet')
    try:
        api.update_status(tweet)
        return render_template('sent.html', message='Your tweet has been posted!')
    except Exception as e:
        return render_template('sent.html', message="An error has occured: you've most likely already sent an identical tweet")

if __name__ == '__main__':
    app.run(debug=True)
