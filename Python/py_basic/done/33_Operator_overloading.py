# 연산자 오버로딩

class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed

    def move(self, location):
        print(f"{self.name} : {location} 방향으로 이동. 속도 : {self.speed}")

class AttackUnit(Unit): # 괄호 안에 상속받을 클래스 Unit 입력
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
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

class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print(f"{name} : {location} 방향으로 날아갑니다. 속도 : {self.flying_speed}")

class FlyableAttackUnit(AttackUnit, Flyable): # 두 클래스를 상속받음
    def __init__(self, name ,hp ,damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage) # 지상 speed는 0으로 처리
        Flyable.__init__(self, flying_speed)

    def move(self, location):
        self.fly(self.name, location)
    

valkyrie = FlyableAttackUnit("발키리", 200 ,6, 5)
valkyrie.fly(valkyrie.name, "3시")

vulture = AttackUnit("벌쳐", 80, 10, 20)
battlecrusier = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
battlecrusier.fly(battlecrusier.name, "9시")

# 지상, 공중유닛이 이동하는 메소드가 달라 불편 하므로 FlyableAttackUnit 클래스에서 move 함수 재정의 :40 번째 줄

battlecrusier.move("5시")
