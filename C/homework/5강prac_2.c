#include <stdio.h>

int main(int argc, char const *argv[])
{

int count = 0;
    do{
        printf("count : %d\n", count);
        count++;

        if(count == 5){
            printf("\n# count is 5!\n");
            continue;
        }
        printf("count : %d-2\n", count);


    }while (count < 10);

    printf("\n");

    return 0;
}

