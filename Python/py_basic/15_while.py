# 반복문 while

customer = "김씨"
index = 5
while index >= 1:
    print("{0}, 밥 가져가~ {1}번 남았으".format(customer, index))
    index -= 1
    if index == 0:
        print("밥 다 식었다잉")
        
# 무한루프
# customer = "최씨"
# index = 1
# while True:
#     print("{0}, 밥 가져가~ {1}번째 부른다잉".format(customer, index))
#     index += 1

customer = "오씨"
person = "이아무개"

while person != customer:
    print("{0}, 커피가 준비 되었습니다.".format(customer))
    person = input("이름이 모에요? : ")