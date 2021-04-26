// 기억공간을 byte단위가 아닌 bit단위로 사용

// int의 경우 4byte 총 32bit를 사용할 수 있지만
// 값으로 1을 저장하면 1bit만 사용되므로 31bit가 낭비된다.

struct useBitField
{
    unsigned a : 1; // 1bit
    unsigned b : 2; // 2bit
    unsigned int c : 3; // 3bit
    unsigned int d : 7; // 7bit
};

// 1byte 총 8bit 중에
// 1+2+3 = 6bit만 사용되고 나머지 2bit는 버려진다.

// 비트필드의 자료형은 int나 unsigned로 선언
// 비트필드에서 포인터나 배열은 사용 안됨.
// 피트필드의 전체 크기는 시스템이 제공하는 int크기 이내여야 함.

// 하나의 비트필드가 2개의 int 사이에 걸쳐 저장될 수는 없음.
// 첫번째 int에서 31bit가 사용되고 1 bit가 남았을 때,
// 2bit 이상이 저장되면 새로운 int 메모리를 2bit만큼 사용하고 첫번째 int의 나머지 1bit는 그냥 버려진다.

int main(int argc, char const *argv[])
{
    struct useBitField test;
    test.a = 1; // 2^1 - 1
    test.b = 3; // 2^2 - 1
    test.c = 7; // 2^3 - 1
    test.d = 127; // 2^7 - 1

    printf("%d %d %d %d", test.a, test.b, test.c, test.d); // 1 3 7 127

    return 0;
}

