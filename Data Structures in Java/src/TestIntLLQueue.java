public class TestIntLLQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if (!testEnqueue()) {
            System.out.println("Test Failed: testEnqueue");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testDequeue()) {
            System.out.println("Test Failed: testDequeue");
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

        if (!testClear()) {
            System.out.println("Test Failed: testClear");
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

    private static IntLLQueue prepareLinkedList() {
        IntLLQueue list = new IntLLQueue();
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(4);
        list.enqueue(5);

        return list;
    }

    private static boolean testEnqueue() {
        IntLLQueue list = prepareLinkedList();

        return list.peek().equals(1);
    }

    private static boolean testDequeue() {
        IntLLQueue list = prepareLinkedList();

        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();

        return list.peek().equals(5);
    }

    private static boolean testPeek() {
        IntLLQueue list = prepareLinkedList();
        return list.peek().equals(1);
    }

    private static boolean testClear() {
        IntLLQueue list = prepareLinkedList();

        list.clear();

        return list.isEmpty();
    }

    private static boolean testIsEmpty() {
        IntLLQueue list = prepareLinkedList();

        return !list.isEmpty();

    }

}
