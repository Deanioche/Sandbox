#include <stdio.h>

int main()
{

    for (int x = 2; x <= 4; x++)
    {
        for (int y = x; y <= 3; y++)
        {
            printf("*");
        }
        printf("/");
    }

    return 0;
}