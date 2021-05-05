#include <stdio.h>
int main(int argc, char const *argv[])
{
    static int a[] = {10, 20, 30, 40, 50};
    int *pt, b, c;
    pt = a;
    b = *pt  + *(pt + 2);
    printf("b = %d\n", b);

    a[0] = 11;
    a[1] = 22;

    printf("b = %d", b);

    return 0;
}
