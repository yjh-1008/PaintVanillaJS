import java.util.Scanner;
import java.io.*;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args){
        //StringBuilder sb=new StringBuilder();
        Scanner sc=new Scanner(System.in);
       ArrayList<Integer> arr=new ArrayList<Integer>();
        int n=sc.nextInt();
        int k=sc.nextInt();
        //동전을 넣어줌
        for(int i=0;i<n;i++){
            arr.add(sc.nextInt());
        }
        int t=0;
        //나눠지는 가장 큰 값을 찾기
        for(int i=n-1;i>0;i--){
         if(k/arr.get(i)!=0) {// 나눠지는 값이 0이 아닌 가장 큰 수의 인덱스를 찾기
             t = i;
             break;
             }
         }
        //System.out.println(t);
         int count=0;//나눠지는 나머지를 더하는 변수.
        while(k!=0){
            if(k>=arr.get(t)){
                count+=k/arr.get(t);
                k%=arr.get(t);
            }
            t--;
        }
        System.out.print(count);
        }
    }

