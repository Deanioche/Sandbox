# 표준체중 구하기

#남자 : 키 x 키 x 22
#여자 : 키 x 키 x 21
# 키는 미터단위

# 조건 1 : 표준 체중은 함수내에서 계산
# 조건 2 : 표준 체중은 소수점 둘째자리까지 표시

from math import pow

def getWeight(height, gender) : # gender 0 = 남자, 1 = 여자
    if gender : gender = 22 
    else : gender = 21 
    return (pow(height / 100, 2)) * gender

print("표준 체중은 {0}입니다".format(round(getWeight(180, 0),2))) # round()함수로 소수점 둘째자리까지