import tweepy
import os

consumer_key = os.environ['CONSUMER_KEY']
consumer_secret = os.environ['CONSUMER_SECRET']
access_token = os.environ['ACCESS_TOKEN']
access_token_secret = os.environ['ACCESS_TOKEN_SECRET']

def OAuth():
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    return auth

oauth = OAuth()
api = tweepy.API(oauth)

tweet = raw_input('Tweet: ')
check = raw_input('Are you sure you want to tweet "' + tweet + '"(y/N)')
if check == 'y':
    api.update_status(tweet)
    print('a tweet has been posted')
else:
    print('your tweet has been cancelled')
