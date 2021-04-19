# 표준 입출력

print("Python", "JavaScript", "Java", sep=" vs ", end=", ") # sep = " " 따옴표 사이 문자열이 ,마다 들어감
print("무엇이 더 재밌을까요?")
print()

import sys
print("Python", "JavaScript", "Java", file=sys.stdout) 
print("Python", "JavaScript", "Java", file=sys.stderr) 
print()

scores = {"수학" : 0, "영어" : 50, "코딩" : 100}
for subject, score in scores.items() : # key 와 value를 튜플로 보내 각각 변수에 담아줌
    print(subject.ljust(8), str(score).rjust(4), sep=":") # ;just(n) n만큼 공간 확보해 왼쪽/오른쪽 정렬


for num in range(1,21) :
    print("번호 : " + str(num).zfill(3)) # 3만큼 공간을 확보후 값이 없는 공간은 0으로 채움

answer = input("아무 값이나 입력 : ")
print("입력값 : " + answer + "입니다.")
print(type(answer)) # input으로 받은 값은 항상 '문자열'로 저장됨