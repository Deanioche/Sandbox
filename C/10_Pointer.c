#include <stdio.h>

int main(int argc, char const *argv[])
{

    /************************
      Char형 포인터
    ************************/

    char *cpt = "computer";

    int i = 0;

    do
    {
        printf("*(cpt + %d) : %c\n", i, *(cpt + i));
    } while (*(cpt + i++) != '\0');

    /************************
      1차원 배열의 참조
    ************************/
    printf("\n");
    char s[] = "SCIENCE";
    char *cp;
    cp = s; // 포인터 cp에 배열 s를 대입

    // 모든 배열은 포인터를 표현이 가능

    int j = 0;
    do
    {
        //(cp + 1) = &s[1]
        printf(" (cp + %d) : %d     &s[%d] : %d \n", j, (cp + j), j, &s[j]);
        //*(cp + 1) = s[1]
        printf("*(cp + %d) : %c            s[%d] : %c \n", j, *(cp + j), j, s[j]);

    } while (*(cp + i++) != '\0');

    /************************
      2차원 배열 참조
    ************************/

    static int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, -9}};
    int *pt;
    pt = a[0]; // a[0], a 둘다 배열 a의 맨 첫번째 값을 가리키므로 뭘 넣든 상관 없다.
               // a 일시, warning: assignment from incompatible pointer type [-Wincompatible-pointer-types]
    while (*pt != -9)
    {
        printf("%d ", *pt);
        pt++;
    }
    printf("\n\n");

    /************************
      포인터와 배열의 호환
    ************************/

    char arr[] = "ARRAY";
    char *p = "POINTER";

    for (int i = 0; i < 5; i++)
    {
        printf("*(arr + %d) : %c \n", i, *(arr + i)); // 배열을 포인터로
    }
    for (int i = 0; i < 7; i++)
    {
        printf("p[%d] : %c \n", i, p[i]); //포인터를 배열로
    }
    printf("\n");
    printf("*arr + 1 : %c \n", *arr + 1);
    // *arr = arr[0] => A
    // *arr + 1 = arr[0] + 1 => B
    // *(arr + 1) = arr[1] => R

    printf("p[0] : %c ", p[0]);
    // *p = p[0] => P

    return 0;
}
