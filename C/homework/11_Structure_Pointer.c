#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
    /************************
     구조체 포인터 변수 선언
    ************************/
   
    struct ptPerson
    {
        char name[12];
        int age;
        char sex;
    };
    struct ptPerson man[3] = {{"ptPerson1", 111, 'A'}, {"ptPerson2", 222, 'B'}, {"ptPerson3", 333, 'C'}};
    struct ptPerson *pt;

    // *가 . 보다 연산 우선순위가 낮으므로 괄호 필요
    //(*pt).name
    // 또는 포인터 연산자 사용
    //pt -> name

    pt = man; // 구조체 포인터 변수에 man 구조체 시작주소 대입
    printf("%s %d %c\n", pt->name, pt->age, pt->sex);
    pt++;
    printf("%s %d %c\n", (*pt).name, (*pt).age, (*pt).sex);
    pt++;
    printf("%s %d %c\n", pt->name, pt->age, pt->sex);
}
