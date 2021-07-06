from flask import Flask # flask 모듈 import
app = Flask(__name__) # flask 객체를 app에 할당

@app.route('/') # flask 웹 페이지 경로
def hello(): # 경로에서 실행될 기능 선언
    return '<b>Hello!!!</b>'

if __name__ == "__main__":
    app.run() # host와 port 변경이 안됨
    # app.run(host="0.0.0.0", port="9000", debug=True) # host주소와 port number 선언