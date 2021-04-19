# if
weather = input("오늘 날씨는 어때요? ")
#weather = "비"

if weather == "비" or "눈":
    print("우산을 챙기세요")
elif weather == "맑음":
    print("오늘은 맑아요")
else: 
    print("예보를 못들었어요")


temp = int(input("오늘 기온이 어때요? : "))
if 30 <= temp:
    print("너무 더워요")
elif 10 <= temp and temp < 30:
    print("괜찮아요")
elif 0 <= temp < 10:
    print("추워요")
else:
    print("나가지 마세요")