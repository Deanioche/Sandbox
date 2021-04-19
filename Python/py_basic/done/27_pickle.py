# Pickle
# 데이터를 파일에 저장
# pickle 을 쓰기 위해서는 항상 바이너리를 명시해줘야 한다. wb, wr
import pickle
profile_file = open("Python/py_basic/profile.pickle", "wb") # wb : 쓰기 바이너리 // pickle에서는 따로 인코딩 설정 필요 x
profile = {"이름" : "박명수", "나이":30, "취미" : ["축구","골프","코딩"]}
print(profile)
pickle.dump(profile, profile_file) # profile 정보를 file에 저장
profile_file.close()

profile_file = open("Python/py_basic/profile.pickle", "rb") # rb : 읽기 바이너리
profile = pickle.load(profile_file) # file에 있는 정보를 profile에 불러오기
print(profile)
profile_file.close()