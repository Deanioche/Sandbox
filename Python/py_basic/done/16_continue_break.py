absent = [2, 5] # 결석
no_book = [7]
for student in range (1, 11) :
    if student in absent :
        continue # 즉시 다음 for문 순서로 넘어감
    elif student in no_book :
        print(f"오늘 수업 끝. {student}은 교무실로 따라와")
        break # 반복문 끝
    print("{0}, 책읽어봐".format(student)) # 2와 5 스킵
