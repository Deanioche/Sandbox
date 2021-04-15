# 지역변수 전역변수

gun = 10 # 전역변수

def checkpoint(soldiers):
    # gun = 20 # 지역변수
    global gun # 전역 공간에 있는 변수 gun 사용
    gun = gun - soldiers
    print("[함수 내] 남은 총 : {0}".format(gun))

    
print(f"전체 총 : {gun}")
checkpoint(2)
print(f"남은 총 : {gun}")

# 위와 결과가 같지만 위 방식은 권장되는 사용방식은 아님

def checkpoint_ret(gun, soldiers):
    gun = gun - soldiers
    print("[ret 함수 내] 남은 총 : {0}".format(gun))
    return gun

print(f"전체 총 : {gun}")
checkpoint_ret(gun, 2)
print(f"남은 총 : {gun}")