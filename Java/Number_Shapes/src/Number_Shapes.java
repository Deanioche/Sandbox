import java.lang.reflect.Array;
import java.util.*;

public class Number_Shapes {

    public static void main(String[] args) {

        class Number {
            int number;

            public boolean isSquare() {

                Double sqrt = Math.sqrt(number);

                if(sqrt == Math.floor(sqrt)) {
                    return true;
                }else {
                    return false;
                }

            }

            public boolean isTriangular() {
                int x = 1;
                int triangularNum = 1;

                while (triangularNum < number) {
                    x++;

                    triangularNum = triangularNum + x;
                }
                if (triangularNum == number) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        Number myNum = new Number();

        myNum.number = 9;

        System.out.println("isTri : " + myNum.isTriangular());
        System.out.println("isSqrt : " + myNum.isSquare());


        Map map = new HashMap();
        map.put("Username", "happyface");
        map.put("Password", "pword1234");

        System.out.println(map);


       String  string = "Isn't it a lovely day?";
       String[] split = string.split(" ");
        System.out.println(Arrays.toString(split));

        Random rg = new Random();

        int rn = rg.nextInt(5) + 1;

        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);
        System.out.println(rg.nextInt(5) + 1);

    }
}
