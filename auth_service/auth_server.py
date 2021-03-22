import random
from flask import Flask, request

app = Flask(__name__)


@app.route('/login', methods=['POST'])
def authenticate_user():
    return {'success': True, 'token': 'ThisIsAJsonWebToken'}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001')