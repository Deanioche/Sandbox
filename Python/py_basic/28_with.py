# with
# 편하게 파일을 열고 닫을 수 있음

import pickle

with open("Python/py_basic/profile.pickle", "rb") as profile_file: # 파일을 열어 profile_file에 저장. close 해줄 필요 없음
    print(pickle.load(profile_file))

with open("Python/py_basic/study.txt", "w", encoding="utf8") as study_file:
    print("응애 공부해")

with open("Python/py_basic/study.txt", "r", encoding="utf8") as study_file:
    print(study_file.read())