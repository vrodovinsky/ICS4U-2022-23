public class TestLLStack {
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

        if (!testEmpty()) {
            System.out.println("Test Failed: testEmpty");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
    }

    private static IntLLStack prepareLinkedList() {
        IntLLStack list = new IntLLStack();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);

        return list;
    }

    private static boolean testPush() {
        IntLLStack list = prepareLinkedList();

        list.push(6);

        return list.peek().equals(6);
    }

    private static boolean testPop() {
        IntLLStack list = prepareLinkedList();

        list.pop();

        return list.peek().equals(4);
    }

    private static boolean testPeek() {
        IntLLStack list = prepareLinkedList();
        return list.peek().equals(5);
    }

    private static boolean testSearch() {
        IntLLStack list = prepareLinkedList();

        int result = list.search(5);

        return result == 4;
    }

    private static boolean testEmpty() {
        IntLLStack list = prepareLinkedList();

        return !list.empty();

    }

}
