// printf scanf등 표준함수 사용을 위해 헤더파일 stdio.h를 정의
#include <stdio.h>
void main()
{
    // sizeof() : 괄호 안의 변수가 차지하는 메모리 크기를 구한다.                                   결과
    printf("char 자료형 크기 : %d byte\n", sizeof(char));                                      // 1 byte  
    printf("signed char  자료형 크기 : %d byte\n", sizeof(signed char));                       // 1 byte 
    printf("unsigned char 자료형 크기 : %d byte\n", sizeof(unsigned char));                    // 1 byte 
    printf("short 자료형 크기 : %d byte\n", sizeof(short));                                    // 2 byte  
    printf("short int 자료형 크기 : %d byte\n", sizeof(short int));                            // 2 byte  
    printf("signed short 자료형 크기 : %d byte\n", sizeof(signed short));                      // 2 byte  
    printf("unsigned short 자료형 크기 : %d byte\n", sizeof(unsigned short));                  // 2 byte  
    printf("unsigned short int 자료형 크기 : %d byte\n", sizeof(unsigned short int));          // 2 byte  
    printf("int 자료형 크기 : %d byte\n", sizeof(int));                                        // 4 byte
    printf("signed int 자료형 크기 : %d byte\n", sizeof(signed int));                          // 4 byte 
    printf("unsigned 자료형 크기 : %d byte\n", sizeof(unsigned));                              // 4 byte 
    printf("unsigned int 자료형 크기 : %d byte\n", sizeof(unsigned int));                      // 4 byte 
    printf("long 자료형 크기 : %d byte\n", sizeof(long));                                      // 4 byte 
    printf("long int 자료형 크기 : %d byte\n", sizeof(long int));                              // 4 byte 
    printf("signed long 자료형 크기 : %d byte\n", sizeof(signed long));                        // 4 byte 
    printf("signed long int 자료형 크기 : %d byte\n", sizeof(signed long int));                // 4 byte 
    printf("unsigned long 자료형 크기 : %d byte\n", sizeof(unsigned long));                    // 4 byte  
    printf("unsigned long int 자료형 크기 : %d byte\n", sizeof(unsigned long int));            // 4 byte  
    printf("long long 자료형 크기 : %d byte\n", sizeof(long long));                            // 8 byte  
    printf("long long int 자료형 크기 : %d byte\n", sizeof(long long int));                    // 8 byte  
    printf("signed long long 자료형 크기 : %d byte\n", sizeof(signed long long));              // 8 byte  
    printf("signed long long int 자료형 크기 : %d byte\n", sizeof(signed long long int));      // 8 byte  
    printf("unsigned long long 자료형 크기 : %d byte\n", sizeof(unsigned long long));          // 8 byte  
    printf("unsigned long long int 자료형 크기 : %d byte\n", sizeof(unsigned long long int));  // 8 byte  
    printf("float 자료형 크기 : %d byte\n", sizeof(float));                                    // 4 byte  
    printf("double 자료형 크기 : %d byte\n", sizeof(double));                                  // 8 byte  
    printf("long double 자료형 크기 : %d byte\n", sizeof(long double));                        // 12 byte 
}
