#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    FILE *fp;
    char ch;
    fp = fopen("prac/sample.txt", "a"); // w 쓰기 r 읽기 a 추가(append)

    if(fp == NULL){
        printf("파일 읽기 오류"); // 에러메세지
        exit(1); // 프로그램 종료
    }  

    // for(ch = 'A'; ch <= 'Z'; ch++) { // ABCDEFGHIJKLMNOPQRSTUVWXYZ
    // fputc(ch, fp);
    // fputc(91, fp);
    // }

    // while((ch = getchar()) != EOF){ // ^Z가 나올때까지 입력받음
    //     putc(ch, fp);
    // }

    char no[10], name[10];
    int mid, term, rep, att, i;

    // fprintf(stdout, "학번 이름 중간 기말 레포트 출석 점수를 입력\n");
    // for(int i = 0; i < 3; i++){
    //     scanf("%s %s %d %d %d %d", no, name, &mid, &term, &rep, &att);
    //     fprintf(fp, "%10s %8s %3d %3d %3d %3d\n", no, name, mid, term, rep, att );

    // }

    // 11111   DinDin 100 100 100 100
    // 22222    Sokyo  10  10  10  10
    // 10003    Hyoah  50  50  50  50

    fclose(fp); 

    // 순차파일 입력함수
    char c;

    fp = fopen("prac/sample1.dat", "r");
    if(fp == NULL){
        printf("파일 읽기 오류"); // 에러메세지
        exit(1); // 프로그램 종료
    }  

    // while((c = getc(fp)) != EOF){//전체 내용 출력
    //     putchar(c);
    // }

    while(fgets(name, 20, fp) != NULL){ // name : 변수, 20 : 출력 크기, fp : 파일데이터
        printf("%s", name);
    }

    fclose(fp);

    
    return 0;
}


// 사진 2장