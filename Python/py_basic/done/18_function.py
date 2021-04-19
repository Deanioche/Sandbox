# 함수

def open_account() :
    print("새로운 계좌가 생성되었습니다.")

open_account()

def deposit(balance, money):
    print(f"입금 완료. 잔액 {balance + money}원입니다.")
    return balance + money


def withdraw(balance, money, time) : 
    if balance < money :
        print(f"잔액이 부족합니다. 잔액은 {balance}원 입니다.")
        return 0, balance
    elif (balance >= money) and not(9 < time < 18) :  # 첫번째 조건이 True 이어야 하고 두번째 조건은 False이어야 함
        commission = 100
        print(f"야간이용 수수료 100원이 부과됩니다. 잔액 : {balance - money - commission}")

        return commission, balance - money - commission
    else :
        balance -= money
        print(f"출금 완료. 잔액 : {balance}")
        return 0, balance


balance = 0
time = 20

balance = deposit(balance, 10000)
commission, balance = withdraw(balance, 1000, time)
print(f"수수료는 {commission}원, 잔액 : {balance}원 입니다.")

