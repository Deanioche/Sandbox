#include <stdio.h>
int main()
{
    double a, b;
    printf("띄어쓰기로 구분해 나눌 두 수를 입력하세요.\n>");
    scanf("%lf %lf", &a, &b);
    printf("%.9lf", a / b);

    return 0;
}