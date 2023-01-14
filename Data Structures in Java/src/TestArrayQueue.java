public class TestArrayQueue {
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

    private static IntArrayQueue prepareArray() {
        IntArrayQueue arr = new IntArrayQueue();
        arr.enqueue(1);
        arr.enqueue(2);
        arr.enqueue(3);
        arr.enqueue(4);
        arr.enqueue(5);

        return arr;
    }

    private static boolean testEnqueue() {
        IntArrayQueue arr = prepareArray();

        return arr.peek().equals(1);
    }

    private static boolean testDequeue() {
        IntArrayQueue arr = prepareArray();

        arr.dequeue();
        arr.dequeue();
        arr.dequeue();
        arr.dequeue();

        return arr.peek().equals(1);
    }

    private static boolean testPeek() {
        IntArrayQueue arr = prepareArray();
        return arr.peek().equals(1);
    }

    private static boolean testClear() {
        IntArrayQueue arr = prepareArray();

        arr.clear();

        return arr.isEmpty();
    }

    private static boolean testIsEmpty() {
        IntArrayQueue arr = prepareArray();

        return !arr.isEmpty();

    }

}
