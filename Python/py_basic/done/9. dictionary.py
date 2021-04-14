# 사전

cabinet = {3: "유재석", 100: "김태호"}

print(cabinet[3])
print(cabinet.get(100))
# print(cabinet[5]) # 오류가 뜨고 즉시 프로그램이 종료됨
print(cabinet.get(5)) # None 출력
print(cabinet.get(5, "사용 가능")) # 5번 키에 값이 없으므로 "사용 가능" 대신 출력

cabinet = {"A-10" : "유재석", "B-100" : "조세호"}
cabinet["A-10"] = "하하" # 유재석 교체
cabinet["C-500"] = "김종국" # 추가
print(cabinet)

del cabinet["B-100"] # 조세호 삭제
print(cabinet)

print(cabinet.keys()) # dict_keys(['A-10', 'C-500'])
print(cabinet.values()) # dict_values(['하하', '김종국'])
print(cabinet.items()) # dict_items([('A-10', '하하'), ('C-500', '김종국')])

cabinet.clear() # 비움