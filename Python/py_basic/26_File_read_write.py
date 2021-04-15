# 파일 입출력

score_file = open("Python/py_basic/score.txt", "w", encoding="utf8") # w : write 덮어씀
print("수학 : 0", file=score_file)
print("영어 : 50", file=score_file)
score_file.close()

score_file = open("Python/py_basic/score.txt", "a", encoding="utf8") # a : append 이어씀
score_file.write("과학 : 80")
score_file.write("\n코딩 : 100") # 뒤에 공백이 있어서는 안됨
score_file.close()
# .write()는 줄바꿈이 안됨

score_file = open("Python/py_basic/score.txt", "r", encoding="utf8") # r : read
print(score_file.read())
score_file.close()

print()

score_file = open("Python/py_basic/score.txt", "r", encoding="utf8") # r : read
while(True) :  # 한줄씩 모두 출력
    line = score_file.readline()
    if not line : break
    print(line, end="") 
score_file.close()

print("\n")

score_file = open("Python/py_basic/score.txt", "r", encoding="utf8") # r : read
lines = score_file.readlines() # list 형태로 저장
for line in lines : print(line, end="")

score_file.close()

