
typedef unsigned int BYTE; 
BYTE val; // 컴파일러가 unsigned int val로 해석

typedef int* Number; // int 포인터를 Number로 지정

typedef struct data DATA; // 구조체 data를 DATA로

typedef struct abc
{
    int x;
    int y;
} ABC; // 구조체 abc를 선언함과 동시에 ABC로 typedef