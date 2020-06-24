from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/tweet-python/<path:path>')
def index(path):
    return send_from_directory("tweet-python", path)

if __name__ == '__main__':
    app.run(debug=True)
