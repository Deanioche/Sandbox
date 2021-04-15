# 예외처리

print("나누기 전용 계산기")
try:
    nums = []
    nums.append(int(input("입력 : ")))
    nums.append(int(input("입력 : ")))
    nums.append(int(nums[0] / nums[1]))

    #print(f"{num1} / {num2} = {num1 / num2}")
    print(f"{nums[0]} / {nums[1]} = {nums[2]}")
except ValueError:
    print("에러!! 잘못된 값 입력됨.")

except ZeroDivisionError as err:
    print(err) # 에러를 출력 division by zero

except Exception as err:
    print("알수 없는 오류")
    print(err)
