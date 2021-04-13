#include <stdio.h>
#define ADDR "우리집은 서울이야."
#define TEL "123123345"

#define AREA(x) (x + 3)
#define PLUS(a, b) (a + b)
#define PLUS2(a, b) a + b



int main(int argc, char const *argv[])
{

    // printf("12\a3\b4\f5\n6\r7\t8\0감자");

    enum day1 {SUN, MON, TUE, WED}d1; // 0 1 2 3

     d1 = SUN; // enum d1 저장된 값 : 0 
     d1 = WED; // enum d1 저장된 값 : 3
 
    printf("enum d1 저장된 값 : %d \n", d1); 

    printf("주소 : %s\n", ADDR);
    printf("전번 : %s\n", TEL);

/************************
 # 매크로 함수
************************/

    printf("\n AREA(3) = %d", AREA(3)); // 6
    printf("\n PLUS(3, 6) = %d", PLUS(3, 6)); // 9
    printf("\n 2 * PLUS2(3, 6) = %d", 2 * PLUS2(3, 6)); // 12


/************************
 # 조건부 매크로
************************/
#define CONDITION 1
#if CONDITION
    printf("\n\ncond : true"); // 1일때
#else
    printf("\n\ncond2 : false"); // 0일때
#endif

    return 0;
}


