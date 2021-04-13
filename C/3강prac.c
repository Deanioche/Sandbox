#include <stdio.h>
#pragma warning(disable:4996) 

int main(int argc, char const *argv[])
{
    char a = 'A';

    printf("%d, %c\n", a, a); // 65, A
    printf("%d, %c\n", a+2, a+2); // 67, C

    putchar(a+2); // C

    printf("\n");
    
    printf("%c\n",'a');
    printf("%d\n",-123);
    printf("%o\n",123);
    printf("%x\n",123);
    printf("%X\n",123);
    printf("%f\n",123.456789);
    printf("%e\n",123.456789);
    printf("%s\n","abcdefg");

    printf("\n");

    printf("|%d|\n",123);
    printf("|%5d|\n",123);
    printf("|%-5d|\n",123);
    printf("|%05d|\n",123);
    printf("|%6.1f|\n",123.45);
    printf("|%07.2f|\n",123.45);

    printf("\n");

/************************
 # scanf
************************/

    // int var;
    // printf("var 입력하셔 : ");
    // scanf("%d", &var);
    
    // printf("입력 : %d", var);

/************************
 # getchar()
************************/

// printf("char 입력 : \n");
// char onechar = getchar();

// printf("a = %c \n", onechar);

/************************
 # putchar()
************************/

char var='A';
putchar(var);
putchar(var+1);
putchar('\n');
putchar('K');
putchar('K'+2);
putchar('\007');

printf("\n");

/************************
 # gets()
************************/

char str[50];

printf("문자열 입력 :");
gets(str);

printf("gets()로 받은 문자열 : %s", str);

printf("\n");

/************************
 # puts()
************************/

printf("\nputs(str) : ");
puts(str); // puts는 자동으로 줄이 바뀌어 출력됨 \n
printf("printf : %s\n", str);
puts("123");


#define FINE(x, y) (x + y)
#define DEFINE(x, y) (FINE(x,y) * FINE(x,y))

printf("\nDEFINE(2,3) : %d", DEFINE(2,3)); // (2+3) * (2+3) = 25

    return 0;
}



