#include <stdio.h>
#include <string.h>

int menu();
void create();
void save(char *name, char *id, char *pwd);


int main(int argc, char const *argv[])
{

    int select = menu();

    printf("입력된 번호 : %d\n", select);
    create();

    return 0;
}

void save(char *name, char *id, char *pwd){

    int user[3] = {{*name},{*id},{*pwd}};

    printf("user : %s", user);

}

void create(){

    char name[20];
    char id[20];
    char pwd[20];

    printf("\n# 이름 : ");
    scanf("%s", &name);
    printf("\n# 아이디 : ");
    scanf("%s", &id);
    printf("\n# 비번 : ");
    scanf("%s", &pwd);

    save(&name, &id, &pwd);

}

int menu() {

    int select;

    printf("[CRUD 메뉴]\n");
    printf("# 1. Create \n");
    printf("# 2. Read \n");
    printf("# 3. Update \n");
    printf("# 4. Delete \n");

    printf("# 입력 > ");
    scanf("%d",&select);

    return select;
}
