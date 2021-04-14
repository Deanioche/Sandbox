subway = [10, 20, 30]
print(subway)

subway = ["유재석", "조세호", "박명수"]
print(subway.index("조세호")) # 1

subway.append("하하")
print(subway) # 하하 추가

subway.insert(1, "정형돈")
print(subway) # 1번 인덱스에 정형돈 추가

print(subway.pop()) # 가장 마지막 인덱스인 하하 빠짐. 빠진 하하를 출력
print(subway.pop()) # 박명수
print(subway) 

print(subway.count("유재석")) # 유재석은 한명이므로 1

num_list = [5,2,4,3,1]
num_list.sort()
print(num_list) # 1 2 3 4 5

num_list.reverse()
print(num_list) # 5 4 3 2 1

num_list.clear()
print(num_list) # [] 빈 리스트

mix_list = ["조세호", 20, True]
print(mix_list)

num_list = [5,2,4,3,1]
num_list.extend(mix_list)
print(num_list) # 두 배열 합쳐짐