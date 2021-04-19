# 가변 인자 함수호출

# def profile(name, age, l1, l2, l3, l4, l5):
#     print("이름 : {0}\t나이 : {1}\t".format(name, age), end=" ") # end=" " 줄바꿈 대신 따옴표 안의 문자열로 print가 끝남
#     print(l1, l2, l3, l4, l5)

# profile("김씨", 20, "python", "Java", "C", "C++", "C#")
# profile("김씨", 20, "Kotlin", "Swift", "", "", "")

def profile(name, age, *lang):
    print("이름 : {0}\t나이 : {1}\t".format(name, age), end=" ") # end=" " 줄바꿈 대신 따옴표 안의 문자열로 print가 끝남
    for l in lang :
        print(l, end=" ")
    print()

profile("김씨", 20, "python", "Java", "C", "C++", "C#", "JavaScript")
profile("김씨", 20, "Kotlin", "Swift")