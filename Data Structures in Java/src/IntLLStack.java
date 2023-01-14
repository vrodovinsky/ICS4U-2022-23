public class IntLLStack {
    private IntLinkedList data;

    public IntLLStack() {
        data = new IntLinkedList();
    }

    public void push(Integer el) {
        data.add(el);
    }

    public Integer pop() {
        return data.remove(data.size());
    }

    public Integer peek() {
        return data.get(data.size() - 1);
    }

    public int search(Integer num) {
        for (int i = 0; i < data.size(); i++) {
            if (data.get(i).equals(num)) {
                return i;
            }
        }

        return -1;
    }

    public boolean empty() {
        return data.isEmpty();
    }

}
