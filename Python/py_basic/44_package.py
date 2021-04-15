# 패키지

# import travel.korea 
# import travel.korea.KoreaPackage() # 파일명만 .으로 이어서 가능, 클래스나 함수는 불가능

# trip_to = travel.korea.KoreaPackage()
# trip_to.detail()

# from travel.japan import JapanPackage

# trip_to = JapanPackage()
# trip_to.detail()

# __all__

# from travel import * # 공개 범위를 설정해줘야 *로 사용 가능
# trip_to = japan.JapanPackage()
# trip_to.detail()

# trip_to = korea.KoreaPackage()
# trip_to.detail()

import inspect # 해당 모듈의 디렉토리 경로를 알려줌
import random
print("random 모듈은 여기있다 : " + inspect.getfile(random)) # random 모듈은 여기있다 : C:\Program Files\Python38\lib\random.py


# travel 패키지를 \Python38\lib\ 경로로 옮긴 후
from travel import *
print("japan 모듈은 여기있다 : " + inspect.getfile(japan)) # japan 모듈은 여기있다 : C:\Program Files\Python38\lib\travel\japan.py
print("korea 모듈은 여기있다 : " + inspect.getfile(korea)) # korea 모듈은 여기있다 : C:\Program Files\Python38\lib\travel\korea.py