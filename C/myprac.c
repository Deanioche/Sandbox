#include <stdio.h>

// function prototype(함수 원형)을 먼저 설정
int input();
int add(int x, int y)
{
    return x + y;
};

int main()
{

    for (int x = 2; x <= 4; x++)
    {
        for (int y = x; y <= 3; y++)
        {
            printf("*");
        }
        printf("/");
    }

    int result = add(3, 7);

    printf("\n Result = %d", result);
    printf("\n Result2 = %d", add(30, 10));

    printf("\n input num :");
    int num = input();

    // scanf("%d", num); 작동 안됨

    printf("\n num + 10 : %d", (num + 10));

    return 0;
}

// int add(int x, int y)


int input() {
    int x = 1;
    //scanf("%d", &x);
    return x;
}
