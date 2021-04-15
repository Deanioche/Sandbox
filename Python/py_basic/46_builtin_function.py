# 내장 함수

# input : 입력을 받는함수

# dir : 어떤 객체를 넘겨줬을 때 그 객체가 어떤 변수와 함수를 가지고 있는지 표시

print(dir())

import random
print(dir()) # 리스트 끝에 random이 추가됨
import pickle
print(dir()) # pickle 추가

print(dir(random)) # random 모듈 내장함수 리스트 출력
print(dir(list)) 
name = "Goo"
print(dir(name)) 

# 파이썬 내장함수 정보
# https://docs.python.org/3/library/functions.html#classmethod


