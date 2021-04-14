# 총 20명 중, 1명 치킨 3명 커피쿠폰
# 무작위추첨, 중복 x
# random 모듈의 shuffle과 sample 활용

# 출력예제
# [ 당첨자 발표 ]
# 치킨 : 1
# 커피 : [2, 3, 4]

# shuffle()과 sample()을 사용하기 위해
from random import *

users = range(1, 21) # 1 ~ 20
print(type(users)) # type이 "range"
users = list(users) # type을 list로 변경
print(users) 
shuffle(users)
print(users) 
winners = sample(users, 4)

print("[당첨자 발표]")
print("치킨 : {0}" .format(winners[0]))
print("커피 : {0}" .format(winners[1:]))