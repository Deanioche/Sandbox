#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
    /************************
      구조체 생성
    ************************/

    struct person
    {
        char *name;
        int age;
        char sex;
    }; // 메모리 12 (4 + 4 + 4)

    struct person x = {"personX", 23, 'M'};
    struct person y;
    strcpy(y.name, "personY");
    y.age = 35;
    y.sex = 'W';
    y.name = "personY2";

    printf("%s %d %c size : %d\n", x.name, x.age, x.sex, sizeof(x)); // 12
    printf("%s %d %c size : %d\n", y.name, y.age, y.sex, sizeof(y)); // 12

    // 메모리는 구조체 멤머중 가장 큼 자료형의 크기로 할당됨
    // person에서는 int 기준으로 변수당 최소 4byte가 먹힘
 

    /************************
     구조체 배열
    ************************/

    struct personArr
    {
        char name[10];
        int age;
        char sex;
    }; // 16 (12 + 4 + 4)

    struct personArr pArr[3] = {{"응애1", 11, 'A'}, {"응애2", 22, 'B'}, {"응애3", 33, 'C'}};

    strcpy(pArr[0].name, "김철수");
    pArr[0].sex = 'N';

    printf("%s %d %c size : %d\n", pArr[0].name, pArr[0].age, pArr[0].sex, sizeof(pArr[0]));
    printf("%s %d %c size : %d\n", pArr[1].name, pArr[1].age, pArr[1].sex, sizeof(pArr[1]));
    printf("%s %d %c size : %d\n", pArr[2].name, pArr[2].age, pArr[2].sex, sizeof(pArr[2]));
}
