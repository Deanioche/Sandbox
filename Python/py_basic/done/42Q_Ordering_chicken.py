# 치킨주문 예외 처리하기

class SoldOutError(Exception):
    def __init__(self, msg):
        self.msg = msg
    
    def __str__(self):
        return self.msg

chicken = 10
waiting = 1
while(True):
    try:
        print(f"[ 남은 치킨 : {chicken} ]")
        order = int(input("칰 몇마리 주문할래? :"))

        if order < 1 :
            raise ValueError("1마리 이상 주문해주세요")

        if(order > chicken):
            print("재료 부족")
        else:
            print(f"[대기번호 {waiting}] {order}마리 주문 완료.")
            waiting += 1
            chicken -= order
        
        if chicken == 0:
            raise SoldOutError("재고가 소진되어 더 이상 주문을 받지 않습니다.")

    except ValueError as err:
        print(err)
    except SoldOutError as err:
        print(err)
        break

