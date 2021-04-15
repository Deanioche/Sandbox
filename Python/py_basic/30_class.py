# 클래스

class Unit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage
        print(f"{self.name} 유닛이 생성되었습니다. " + f"체력 : {self.hp}, 공격력 : {self.damage}")

    def attack(self, location):
        print(f"{self.name} : {location} 방향으로 공격 합니다. 공격력 : {self.damage}")

    def damaged(self, damage):
        print(f"{self.name} : {damage} 데미지를 입었습니다.")
        self.hp -= damage
        print(f"{self.name} : 현재 체력 = {self.hp}")
        if self.hp <= 0 :
            print(f"{self.name} : 파괴되었습니다.")

marine1 = Unit("마린1", 40, 5)
marine2 = Unit("마린2", 40, 5)

# __init__은 "생성자"
# marine은 "객체"이고 Unit 클래스의 "인스턴스"

# 멤버 변수
# : 클래스 내부에서 정의된 변수

wraith1 = Unit("레이스", 80, 5)
print(f"유닛 이름 : {wraith1.name}") # 멤버 변수 호출가능

wraith1.clocking = True # 멤버변수에 없는 변수 추가 할당이 가능. wraith1에만 변수가 추가됨.

if wraith1.clocking :
    print("클로킹? : " + str(wraith1.clocking))


# 메소드
    
firebat1 = Unit("파이어뱃", 50, 16)
firebat1.attack("5시")
firebat1.damaged(25)
firebat1.damaged(25)