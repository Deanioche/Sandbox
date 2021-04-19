# 50명의 손님
# 승객별 소요시간 5분 ~ 50분
# 5분 ~ 15분 사이의 승객만 태워주면
# 총 몇명 태우나?

from random import randint # randint 함수만 import

customers = {} # 손님번호와 소요시간을 담을 사전 dict 생성
for num in range(1,51) : 
    customers[num] = randint(5, 50) # 5 ~ 50 소요시간 입력

count = 0  # 총 승객 카운트

for cus in customers :

    ox = " "
    if 5 <= customers[cus] <= 15 : # 범위 안에 들어오면 O
        ox = "O"
        count += 1

    print(f"[{ox}] {cus}번째 손님 (소요시간 : {customers[cus]}분)")

print(f"총 탑승 승객 : {count}")