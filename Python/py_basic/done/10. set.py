# 집합
# 중복 x, 순서 x

my_set = {1,2,3,3,3}
print(my_set) # 1,2,3

java = {"ㅇㅈㅅ", "ㄱㅌㅎ", "ㅇㅅㅎ"}
python = set(["ㅇㅈㅅ", "ㅂㅁㅅ"])

# 교집합 (java & python)
print(java & python) # ㅇㅈㅅ
print(java.intersection(python)) # ㅇㅈㅅ

# 합집합
print(java | python) # 배열 전체 (순서는 매번 바뀜)
print(java.union(python)) # 동일

# 차집합
print(java - python) # ㄱㅌㅎ, ㅇㅅㅎ
print(java.difference(python))

python.add("ㄱㅌㅎ")
print(python) # ㄱㅌㅎ 추가

java.remove("ㄱㅌㅎ")
print(java) # ㄱㅌㅎ 제거