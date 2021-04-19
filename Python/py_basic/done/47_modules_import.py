# 외장 함수
# https://docs.python.org/ko/3/py-modindex.html

# glob : 경로 내의 폴더 / 파일 목록 조회 (윈도우 dir)

import glob
print(glob.glob("Python/py_basic/*.py")) # 해당 경로의 확장자가 py인 모든 파일

# os : 운영체제에서 제공하는 기본 기능
import os
print(os.getcwd()) # 현제 디렉토리

folder = "Python/py_basic/sample_dir"

if os.path.exists(folder):
    print("이미 존재하는 폴더입니다.")
    os.rmdir(folder)
    print("삭제 완료")
else:
    os.makedirs(folder)
    print(folder, "폴더 생성 완료")

import time
print(time.localtime())
print(time.strftime("%Y-%m-%d %H:%M:%S"))

import datetime
print("오늘 날짜는", datetime.date.today())

# timedelta 두 날짜의 간격
today = datetime.date.today()
td = datetime.timedelta(days=100) # 100일 저장
print("오늘로부터 100일 후는", today + td)
