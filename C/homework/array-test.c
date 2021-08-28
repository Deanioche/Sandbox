#include <stdio.h>

int main(int argc, char const *argv[])
{
    
    int arr[3][1] = {{1},{2},{3}};

    // ?????
    printf("%d\n", arr[2][0]); // 3
    printf("%d\n", arr[0][2]); // 3
    printf("%d\n", arr[1][1]); // 3

    
    char arrr[5][5] = {{"abc"},{"edf"},{"ght"},"123"};

    printf("0 0 %s\n", arrr[0]); // abc
    printf("0 1 %s\n", arrr[1]); // edf
    printf("0 2 %s\n", arrr[2]); // ght
    printf("0 3 %s\n", arrr[3]); // 123

    printf("\n[user]\n");
    char user[3][20] = {"name1", "id2", "pwd3"};

    printf("name : %s\n",user[0]);
    printf("id : %s\n",user[1]);
    printf("pwd : %s\n",user[2]);

    return 0;
}
