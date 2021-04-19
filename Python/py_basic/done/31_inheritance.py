# 상속

class Unit:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

class AttackUnit(Unit): # 괄호 안에 상속받을 클래스 Unit 입력
    def __init__(self, name, hp, damage):
        Unit.__init__(self, name, hp)
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



firebat1 = AttackUnit("파이어뱃", 50, 16)
firebat1.attack("5시")
firebat1.damaged(25)
firebat1.damaged(25)