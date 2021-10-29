import java.util.*;

public class Main {

    public static void main(String[] args) {
        List<Integer> com = getComsNum();
        while (true) {
            List<Integer> user = getUserNum();
            if (goComp(com, user) == 1) {
                System.out.println("성공!");
                return;
            }
        }
    }

    public static List<Integer> getUserNum() {
        Scanner sc = new Scanner(System.in);
        System.out.print("숫자 3개를 입력하세요 : ");
        List<Integer> user = new ArrayList<Integer>();
        String[] ipt = sc.nextLine().split("");
        for (int i = 0; i < ipt.length; i++)
            user.add(Integer.parseInt(ipt[i]));
        return user;
    }

    public static List<Integer> getComsNum() {
        Random random = new Random();
        List<Integer> lst = new ArrayList<Integer>();
        while (lst.size() < 3) {
            int rn = random.nextInt(9) + 1;
            if (!lst.contains(rn))
                lst.add(rn);
        }
        return lst;
    }

    public static int goComp(List<Integer> com, List<Integer> user) {
        int[] score = new int[2];
        for (int i = 0; i < com.size(); i++) {
            for (int j = 0; j < user.size(); j++) {
                if (com.get(i) == user.get(j)) { // 숫자가 같은데,
                    score = getStkBall(score, i, j);
                }
            }
        }
        return getStatement(score);
    }

    public static int[] getStkBall(int[] score, int i, int j) {
        if (i == j) // 위치까지 같다 -> strike
            score[0]++;
        else // 위치는 다르다 -> ball
            score[1]++;
        return score;
    }

    public static int getStatement(int[] score) {
        String result = "";
        if (score[0] == 3)
            return (1);
        else if (score[0] + score[1] != 0) {
            if (score[0] != 0)
                result = score[0] + " 스트라이크";
            if (score[1] != 0)
                result += score[1] + " 볼";
        } else {
            result += "Nothing";
        }
        System.out.println(result);
        return (0);
    }

}
