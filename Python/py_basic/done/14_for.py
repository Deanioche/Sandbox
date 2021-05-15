 # 반복문 for

for waiting_num in range(5): # 0,1,2,3,4
    print("대기번호 : {0}".format(waiting_num))

for waiting_num in range(1, 6): # 1,2,3,4,5 
    print("대기번호 : {0}".format(waiting_num))

restaurant = ["김씨", "이씨", "구씨"]
for name in restaurant:
    print("{0} 밥먹어~".format(name))

# 한줄for

students = [1,2,3,4,5]
print(students)
students = [i+100 for i in students]
print(students)

students = ["Mr. Kim", "Ms. Choi", "Mrs. Go"]
students = [len(i) for i in students] # 배열을 길이로 변환
print(students)

students = ["Mr. Kim", "Ms. Choi", "Mrs. Go"]
students = [i.upper() for i in students]
print(students)
