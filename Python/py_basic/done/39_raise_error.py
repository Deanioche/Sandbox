# 에러 발생시키기

try:
    print("한 자리 숫자 나누기 전용 계산기")
    num1 = int(input("입력 : "))
    num2 = int(input("입력 : "))
    if num1 >= 10 or num2 >= 10:
        raise ValueError
    print(f"{num1} / {num2} = {num1 / num2}")
except ValueError:
    print("잘못된 값을 입력했습니다. 한자리만")