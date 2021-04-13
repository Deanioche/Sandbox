#include <stdio.h>

int main(int argc, char const *argv[])
{

    int i, n, c = 'A';

goback:

    printf("Q는 %d", 'Q' - 'A');

    while (1)
    {
        printf("\n 횟수는 ?");
        scanf("%d", &n);

        if (n > 15)
        {
            c = 'A';
            goto goback;
        }

        for (i = 1; i <= n; i++)
        {
            printf("%c", c);
            if (c == 'Q')
                goto end;
            c++;
        }
    }

end:

    printf("\n\n 끝 ");

    return 0;
}

// C프로그래밍 5강 30:40까지 시청.
