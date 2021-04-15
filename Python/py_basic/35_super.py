# class BuildingUnit(Unit):
#     def __init__(self, name, hp, location):
#         #Unit.__init__(self, name, hp ,0)
#         super().__init__(name, hp, 0) # 위와 같은 동작. super에선 self는 넘기지 않음.
#         self.location = location

# supply_depot = Build("서플라이 디폿", 500, "7시")


class Unit:
    def __init__(self):
        print("Unit 생성자")

class Flyable:
    def __init__(self):
        print("Flyable 생성자")

class FlyableUnit(Unit, Flyable):
    def __init__(self):
        #super().__init__()
        Unit.__init__(self)
        Flyable.__init__(self)

dropship = FlyableUnit() # Unit 생성자 

# super는 첫 파라미터로 들어온 클래스만 호출되므로 다중 상속을 할때는 super()를 쓰지 않음