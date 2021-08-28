#include <stdio.h>

int main(int argc, char const *argv[])
{

    struct test
    {
        char name[8];
        int age;
    }aaa;

    aaa.age = 30;
    aaa.name[7] = "fff";

    return 0;
}
