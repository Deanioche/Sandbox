# 함수 기본값

def profile(name = "아무개", age = 17, main_lang = "C-lang") : # 기본값을 지정해준다
    print("이름 : {0}\t나이 : {1}\t주 사용 언어 : {2}" \
        .format(name, age, main_lang)) # 끝에 역슬래시를 쓰면 줄바꿈을 해도 같은 줄로 인식한다.

# SyntaxError: unexpected character after line continuation character
# \ 뒤에는 공백문자가 있어도 에러가 뜬다. \" " <- 지워주자.

profile("유재석", 20, "파이썬")
profile("김태호", 30, "자바")
profile() # 파라미터에 값이 누락되면 기본값이 출력된다.
