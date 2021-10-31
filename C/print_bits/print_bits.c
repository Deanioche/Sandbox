#include <stdio.h>

void print_bits(int input)
{
    while (input > 0)
    {
        if (input % 2 == 1)
            printf("1");
        else
            printf("0");
        input /= 2;
    }
}

int main()
{
    print_bits(45);
}