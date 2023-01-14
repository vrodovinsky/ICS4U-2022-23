public class TestArrayStack {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if (!testPush()) {
            System.out.println("Test Failed: testPush");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testPop()) {
            System.out.println("Test Failed: testPop");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testPeek()) {
            System.out.println("Test Failed: testPeek");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testSearch()) {
            System.out.println("Test Failed: testSearch");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testIsEmpty()) {
            System.out.println("Test Failed: testIsEmpty");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
    }

    private static IntArrayStack prepareArray() {
        IntArrayStack arr = new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);

        return arr;
    }

    private static boolean testPush() {
        IntArrayStack arr = prepareArray();

        arr.push(6);

        return arr.peek().equals(6);
    }

    private static boolean testPop() {
        IntArrayStack arr = prepareArray();

        arr.pop();

        return arr.peek().equals(4);
    }

    private static boolean testPeek() {
        IntArrayStack arr = prepareArray();
        return arr.peek().equals(5);
    }

    private static boolean testSearch() {
        IntArrayStack arr = prepareArray();

        int result = arr.search(5);

        return result == 4;
    }

    private static boolean testIsEmpty() {
        IntArrayStack arr = prepareArray();

        return !arr.isEmpty();

    }

}
