import java.util.Scanner;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int room[][] = new int[n][2];
        //회의시간 넣어주기 0행이 시작시간, 1행이 종료시간
        for (int i = 0; i < n; i++) {
            room[i][0] = sc.nextInt();
            room[i][1] = sc.nextInt();
        }
        Arrays.sort(room, new Comparator<int[]>() {
            public int compare(int a1[], int a2[]) {
                if (a1[1] == a2[1]) {
                    return a1[0] - a2[0];
                }
                return a1[1] - a2[1];
            }
        });
        int end=0;
        int result=0;
        for(int i=0;i<n;i++){
            if(end<=room[i][0]){
                result++;
                end=room[i][1];
            }
        }
        System.out.print(result);
    }
}

