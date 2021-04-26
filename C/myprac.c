#include <stdio.h>
#include <string.h>
int main(int argc, char const *argv[])
{
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

    return 0;
}
