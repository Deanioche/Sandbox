#include <stdio.h>

void print_decimal_bits(double input)
{
    printf(".");
    while (input != 0)
    {
        input *= 2;
        if (input >= 1)
        {
            printf("1");
            input -= 1;
        }
        else
            printf("0");
    }
}

int main()
{
    print_decimal_bits(0.625);
}