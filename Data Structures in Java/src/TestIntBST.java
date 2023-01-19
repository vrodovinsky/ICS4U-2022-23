public class TestIntBST {
    public static void main(String[] args) {

        bst.inOrderPrintTraversal();
        bst.preOrderPrintTraversal();
        bst.postOrderPrintTraversal();

        int testPassed = 0;
        int testFailed = 0;
        if (!testadd()) {
            System.out.println("Test Failed: testadd");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testfind()) {
            System.out.println("Test Failed: testfind");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);

    }

    private static IntBST prepareBST() {
        IntBST bst = new IntBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        return bst;
    }

    private static boolean testadd() {
        prepareBST();

        bst.add(22);
        return false;
    }

    private static boolean testfind() {
        prepareBST();

        return false;
    }

}
