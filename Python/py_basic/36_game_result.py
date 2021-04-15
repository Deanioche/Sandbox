from random import *


class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed

    def move(self, location):
        print(f"{self.name} : {location} 방향으로 이동. 속도 : {self.speed}")
        
    def damaged(self, damage):
        print(f"{self.name} : {damage} 데미지를 입었습니다.")
        self.hp -= damage
        print(f"{self.name} : 현재 체력 = {self.hp}")
        if self.hp <= 0 :
            print(f"{self.name} : 파괴되었습니다.")

class AttackUnit(Unit): # 괄호 안에 상속받을 클래스 Unit 입력
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
        self.damage = damage
        print(f"{self.name} 유닛이 생성되었습니다. " + f"체력 : {self.hp}, 공격력 : {self.damage}")

    def attack(self, location):
        print(f"{self.name} : {location} 방향으로 공격 합니다. 공격력 : {self.damage}")


class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print(f"{name} : {location} 방향으로 날아갑니다. 속도 : {self.flying_speed}")

class FlyableAttackUnit(AttackUnit, Flyable): # 두 클래스를 상속받음
    def __init__(self, name ,hp ,damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location):
        self.fly(self.name, location)

class Marine(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "마린", 40, 1, 5)
    
    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print(f"{self.name} : 스팀팩 사용. 남은 체력 : {self.hp}")
        else:
            print(f"{self.name} : 체력이 부족해 스팀팩 사용 불가. 남은 체력 : {self.hp}")

class Tank(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "탱크", 150, 3, 35)
        self.siege_mode = False

    def set_siege_mode(self):
        if Tank.siege_developed == False:
            return
        
        if self.siege_mode == False:
            print(f"{self.name} : 시즈모드로 전환합니다.")
            self.damage *= 2
            self.siege_mode == True
        else:
            print(f"{self.name} : 시즈모드를 해제합니다.")
            self.damage /= 2
            self.siege_mode == False

class Wraith(FlyableAttackUnit):
    def __init__(self):
        FlyableAttackUnit.__init__(self, "레이스", 80, 20, 5)
        self.clocked = False

    def clocking(self):
        if self.clocked == True:
            print(f"{self.name} : 클로킹 해제")
            self.clocked = False
        else:
            print(f"{self.name} : 클로킹 모드")
            self.clocked = True

def game_start():
    print("[알림] 새로운 게임을 시작합니다.")

def game_over():
    print("[응애] : gg")
    print("[응애] 님이 나가셨습니다.")
            



game_start()

m1 = Marine()
m2 = Marine()
m3 = Marine()

t1 = Tank()
t2 = Tank()

w1 = Wraith()

attack_units = []
attack_units.append(m1)
attack_units.append(m2)
attack_units.append(m3)
attack_units.append(t1)
attack_units.append(t2)
attack_units.append(w1)

for unit in attack_units:
    unit.move("1시")


Tank.siege_developed = True
print("[알림] 시즈모드 개발 완료")

for unit in attack_units:
    if isinstance(unit, Marine):
        unit.stimpack()
    if isinstance(unit, Tank):
        unit.set_siege_mode()
    if isinstance(unit, Wraith):
        unit.clocking()

for unit in attack_units:
    unit.attack("10시")

# 전군 피해
for unit in attack_units:
    unit.damaged(randint(5, 101))

game_over()