    # 1주차 ~ 50주차까지 보고서 파일을 만드는 프로그램 작성
# 보고서는 매주 1회 작성

# 작성 형식
# [ x 주차 주간보고 ]
# 부서 :
# 이름 :
# 업무 요약 : 

def createFile(week) :
    with open("Python/py_basic/29Quiz_result/" + str(week) + "주차.txt", "w") as weekly_report:
        print(f"[ {week} 주차 주간보고 ]" , file=weekly_report)
        weekly_report.write("부서 : \n")
        weekly_report.writelines("이름 : \n")
        print("업무 요약 : ", file=weekly_report)

for num in range(1,51) :
    createFile(num)