// printf scanf등 표준함수 사용을 위해 헤더파일 stdio.h를 정의
#include <stdio.h>
// 사용자 매크로 상수 및 함수 정의
#define IN "원의 반지름은 100입니다. \n"
#define PI 3.1415926535
#define AREA(X) (PI * (X) * (X)) // 원의 면적 공식
#define OUT printf("원의 면적을 구하고 프로그램을 종료합니다. \n")

void main()
{
    printf("%s \n", IN); // 매크로 상수 호출
    printf("원의 면적은 %10.5f입니다. \n\n", AREA(100));
    OUT; // 매크로 함수 호출
}