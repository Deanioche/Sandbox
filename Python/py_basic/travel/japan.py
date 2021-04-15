class JapanPackage:
    def detail(self):
        print("일본 패키지 : 여행 50만원")

if __name__ == "__main__": # 직접 실행
    print("Japan 모듈을 직접 실행했습니다.")
    trip_to = JapanPackage()
    trip_to.detail()
else:
    print("Japan 모듈을 외부에서 호출했습니다.")
