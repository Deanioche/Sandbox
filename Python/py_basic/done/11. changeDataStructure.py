# 자료구조의 변경

menu = {"커피", "우유", "주스"}
print(menu, type(menu)) # {'주스', '우유', '커피'} <class 'set'>

menu = list(menu)
print(menu, type(menu)) # {'주스', '우유', '커피'} <class 'list'>

menu = tuple(menu)
print(menu, type(menu)) # {'주스', '우유', '커피'} <class 'tuple'>

