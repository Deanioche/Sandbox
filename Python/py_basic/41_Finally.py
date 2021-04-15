# Finally
# 예외 발생유무에 상관없이 무조건 작동

class BigNumberError(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

try:
    print("한 자리 숫자 나누기 전용 계산기")
    num1 = int(input("입력 : "))
    num2 = int(input("입력 : "))
    if num1 >= 10 or num2 >= 10:
        raise BigNumberError(f"입력값 : {num1}, {num2}")
    print(f"{num1} / {num2} = {num1 / num2}")
except ValueError:
    print("잘못된 값을 입력했습니다. 한자리만")
except BigNumberError as err:
    print(err)

finally:
    print("잘좀 해봐")