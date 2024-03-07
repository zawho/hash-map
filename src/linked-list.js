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
                console.log(i.value);
                return i.value[1];
            }
        }
        return null;
    }
}

export default LinkedList;