#include <stdio.h>

void score(int arr[][5], int, int);
int main(int argc, char const *argv[])
{

int number[2][5] = {{1,2,3,4,5},{10,10,10,10,10}};
    
score(number, 2, 5);

    return 0;
}

void score(int arr[][5], int a, int b){ // arr[][5] 다차원 배열의 경우 가장 높은 차원의 크기는 생략 가능

    int sum[2] = {0};
    int i, j;

    for(i = 0; i < a; i++){
        for(j = 0; j < b; j++){
            sum[i] += arr[i][j];
            printf("sum[%d] = %d \n", i, sum[i]);
        }
    }

}