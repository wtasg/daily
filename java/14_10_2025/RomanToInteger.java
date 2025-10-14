import java.util.HashMap;
import java.util.Scanner;

class RomanToInteger {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        System.out.println(romanToInt(s));
    }

    static int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int res = 0;

        for (int i = 0; i < s.length(); i++) {
            int val = map.get(s.charAt(i));

            if(i + 1 < s.length() && val < map.get(s.charAt(i + 1))) {
                res -= val;
            } else {
                res += val;
            }
        }
        return res;
    }
}

//solving it as roman to int
//https://leetcode.com/problems/roman-to-integer/

//we use instead of no like 1,2, 3 -> i, ii, iii


//logic
//used map with key value pair to store number with its roman
//loop through string
//check if current value is less than next value then subtract else add
//return res


//dry run for 9
//s = IX
//i = 0, char I, val = 1
//next x = 10
// 1 < 10 -> res = res -1 = 0 - 1= -1


//i = 1
// char x
//val = 10
//no next
//add
// -1 + 10 = 9
