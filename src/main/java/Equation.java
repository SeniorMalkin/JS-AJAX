public class Equation {
    private double a;
    private double b;
    private double c;
    private double root1;
    private double root2;
    private boolean haveRoot;


    public Equation(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;

    }

    public double getA() {
        return a;
    }

    public double getRoot1() {
        return root1;
    }

    public double getRoot2() {
        return root2;
    }

    public boolean isHaveRoot() {
        return haveRoot;
    }

    public void solve(){
        double D = b * b - 4 * a * c;
        if (D > 0) {
            root1 = (-b - Math.sqrt(D)) / (2 * a);
            root2 = (-b + Math.sqrt(D)) / (2 * a);
            haveRoot = true;
        }
        else if (D == 0) {
            root1 = root2 = -b / (2 * a);
            haveRoot = true;
        }
        else {
            haveRoot = false;
        }

    }
}
