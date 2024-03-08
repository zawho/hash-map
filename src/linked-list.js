import node from "./list-node";

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(data) {
        const newNode = node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    contains(data) {
        for (let i = this.head; i; i = i.next) {
            if (i.value[0] === data) {
                return i.value[1];
            }
        }
        return null;
    }

    length() {
        let length = 0;
        for (let i = this.head; i; i = i.next) {
            if (i.next != null) {
                length += 1;
            }
        }
        return length;
    }
}

export default LinkedList;