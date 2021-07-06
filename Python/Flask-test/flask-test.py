from flask import Flask
from flask_cors import CORS

# 이렇게 미들웨어를 import하고 감싸주면 적용.
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


# 전통적인 방법으로 미들웨어 만들기
from werkzeug.wrappers import Request


class Middleware:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        request = Request(environ)
        print('path: %s, url: %s' % (request.path, request.url))
        return self.app(environ, start_response)

app.wsgi_app = Middleware(app.wsgi_app)


# 데코레이터 사용
from functools import wraps

def login_required():
    def _decorated_function(f):
        @wraps(f)
        def __decorated_function(*args, **kwargs):
            if 'logged_in' in session:
                print(session['email'], "session pass")
                return f(*args, **kwargs)
            else:
                print("️ ___no session___")
                return "NO SESSION ERROR"

        return __decorated_function

    return _decorated_function


@app.route('/home')
@login_required()
def home():
    return 'Hello'