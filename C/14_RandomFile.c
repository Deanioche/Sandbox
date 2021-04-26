// 랜덤 파일
// 파일의 임의의 위치에서 자료를 읽거나 쓸 수 있다.
// 레코드의 길이가 일정

// 순차파일과 비교
// 기억공간 낭비.
// 레코드 검색이 빠르고 효과적.

// 랜덤파일 입출력은 binary 모드
// fopen("파일 이름", "wb");

// binary 모드 특징
// 텍스트파일보다 기억공간이 적음.
// 레코드 길이를 개발자가 결정
// 파일 포인터의 위치 변경 가능

// fwrite (저장 자료 변수, 레코드 길이, 레코드 개수 ,파일 포인터)
// fwrite(name, 10, 1, fp);
/*
while(strcmp(name, "END")){
    fwrite(name, 10, 1, fp);
    gets(name);
}

while(1) {
    if(fread(name, 10, 1, fp) != 1){ // 레코드 개수가 1이므로 1이 아닌 값이 리턴되면 break; (즉 파일의 끝이므로)
        break;
    }
    puts(name);
}
*/


// 랜덤파일 위치제어

//fseek()
// 파일 포인터를 임의의 위치로 이동시키는 함수
// 랜덤파일의 특정부분을 입출력 할 수 있다.

// fseek(파일 포인터 변수, 이동할 상대 위치, 기준위치를 지정하는 모드);
// fseek(fp, 2*REC_size, SEEK_SET);

// 0 , SEEK_SET 파일의 시작 위치 // fseek(fp, 0, SEEK_SET);
// 1 , SEEK_CUR 현재 파일포인터으 위치
// 2 , SEEK_END 파일의 끝 위치

#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
    char str[10];
    // FILE *fp = fopen("prac/sample2.txt", "wt");
    // fputs("1234567890", fp);
    // fclose(fp);

    FILE *fp = fopen("prac/sample2.txt", "rt"); // 1234567890
   
    fseek(fp, 7, SEEK_SET);
    fgets(str, 4 ,fp);
    printf("7번째부터 3글자 출력 : %s \n", str); // 890 
    fseek(fp, -2, SEEK_CUR);
    fgets(str, 3 ,fp);
    printf("현재 위치에서 앞에 2글자부터 2글자 출력 : %s \n", str); // 90
    fseek(fp, -9, SEEK_END);
    fgets(str, 6 ,fp);
    printf("맨 뒤에서 9번째 앞부터 5글자 출력 : %s \n", str); // 23456

    fclose(fp);



    return 0;
}
