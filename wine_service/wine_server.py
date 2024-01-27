import random
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/types')
def get_wine_types():
    return jsonify([{
        'name': 'red'
    }, {
        'name': 'white'
    }, {
        'name': 'rose'
    }, {
        'name': 'dessert'
    }, {
        'name': 'sparkling'
    }])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5002')