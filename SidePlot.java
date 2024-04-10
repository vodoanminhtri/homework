
import java.lang.Math;

public class SidePlot {
    public static void main(String[] args) {
        System.out.println("Sideways Plot");
        System.out.println("y = x*x where -6<=x<=6");
        plotXSquared(-6, 6);
        System.out.println("Sideways Plot");
        System.out.println("y = |x|+1 where -5<=x<=5");
        plotAbsXPlus1(-5, 5);
        System.out.println("Sideways Plot");
        System.out.println("y = -(x*x)+20 where -4<=x<=4");
        plotNegXSquaredPlus20(-4, 4);
        System.out.println("Sideways Plot");
        System.out.println("y = 20sin(.5x)+20 where -9<=x<=9");
        plotSinWave(-9, 9);
    }

    // Calculate x square
    public static void plotXSquared(int minXCord, int maxXCord) {
        for (int row = minXCord; row <= maxXCord; row++) {
            int equation= row * row;
            for (int col = equation; col >= minXCord; col--) {
                System.out.print(" ");
            }
            System.out.println("*");
        }
    }

    // Calculate absoluteX plus 1
    public static void plotAbsXPlus1(int minXCord, int maxXCord) {
        for (int row = minXCord; row <= maxXCord; row++) {
            int equation= Math.abs(row) + 1;
            for (int col = equation; col >= minXCord; col--) {
                System.out.print(" ");
            }
            System.out.println("*");
        }
    }

    // Calculate reverse squared plus 20
    public static void plotNegXSquaredPlus20(int minXCord, int maxXCord) {
        for (int row = minXCord; row <= maxXCord; row++) {
            int equation= -(row * row) + 20;
            for (int col = equation; col >= minXCord; col--) {
                System.out.print(" ");
            }
            System.out.println("*");
        }
    }

    // Calculate Sin Wave plot
    public static void plotSinWave(int minXCord, int maxXCord) {
        for (int row = minXCord; row <= maxXCord; row++) {
            double equation= 20*Math.sin(.5*row)+20;
            for (double col = equation; col >= minXCord; col--) {
                System.out.print(" ");
            }
            System.out.println("*");
        }
    }
}