#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void change(int *x, int *y);

int main(int argc, char const *argv[])
{
    // printf("%f", rand()+1);
    
    int a = 3, b = 5;

    change(&a, &b); // a와 b의 주소값을 보냄

    printf("a : %d, b : %d ", a, b); // 30, 55

    return 0;
}

// a와 b의 주소를 받는 x y 생성
void change(int *x, int *y){
    *x = 30; // a와 동일한 주소의 값을 바꿈.
    *y = 55; // b와 동일한 주소의 값을 바꿈.
    
}
