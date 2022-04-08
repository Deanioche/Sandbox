#include <stdio.h>

void rush(int x, int y);

int main(void)
{
    rush(5, 5);
    printf("\n----------------------\n");
    rush(-1, 5);
    printf("\n----------------------\n");
    rush(5, -1);
    printf("\n----------------------\n");
    rush(0, 0);
    printf("\n----------------------\n");
    rush(1, 1);
    printf("\n----------------------\n");
    rush(-5, -5);
    printf("\n----------------------\n");
    rush(2, 2);
    printf("\n----------------------\n");
    return (0);
}