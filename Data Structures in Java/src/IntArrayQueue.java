public class IntArrayQueue {
    private Integer[] data;
    private int tail;

    /*
     * Array implementation of a Queue where the front of the Array is
     * the Front of the Queue
     */

    public IntArrayQueue() {
        data = new Integer[10];
        tail = 0;
    }

    public void enqueue(Integer el) {
        if (tail + 1 == data.length) {
            Integer[] temp = new Integer[data.length * 2];
            for (int i = 0; i < data.length; i++) {
                temp[i] = data[i];
            }
            data = temp;
        }

        data[tail++] = el;
    }

    public Integer dequeue() {
        if (tail < 0)
            return null;

        Integer first = data[0];

        for (int i = 0; i < tail; i++) {
            data[i + 1] = data[i];
        }

        tail--;
        return first;
    }

    public Integer peek() {
        if (!isEmpty())
            return data[0];

        return -1;
    }

    public void clear() {
        data = new Integer[10];
        tail = 0;
    }

    public boolean isEmpty() {
        return tail == 0;
    }
}
