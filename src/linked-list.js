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
            if (i.value.length > 1 && i.value[0] === data) {
                return i.value[1];
            }
            if (i.value.length === 1 && i.value[0] === data) {
                return i.value[0];
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

    delete(data) {
        let current;
        let dataIndex;
        let dataNext;
        for (let i = this.head; i; i = i.next) {
            if (i === this.head) {
                current = 0;
            } else {
                current += 1;
            }
            if (i !== this.head && i.value[0] === data) {
                dataIndex = current;
                dataNext = i.next;
            }
        }

        for (let i = this.head; i; i = i.next) {
            if (i === this.head) {
                current = 0;
            } else {
                current += 1;
            }
            if (i === this.head && i.value[0] === data && i.next === null) {
                this.head = null;
                return true;
            }
            if (i === this.head && i.value[0] === data && i.next != null) {
                this.head = this.head.next;
                return true;
            }
            if (current === dataIndex - 1 && this.contains(data)) {
                i.next = dataNext;
                return true;
            }
        }
        return false;
    }

    keysAndValues(key, value) {
        const arr = [];
        if (key === true && value === null) {
            for (let i = this.head; i; i = i.next) {
                arr.push(i.value[0]);
            }
        }
        if (value === true && key === null) {
            for (let i = this.head; i; i = i.next) {
                arr.push(i.value[1]);
            }
        }
        if (key === true && value === true) {
            for (let i = this.head; i; i = i.next) {
                arr.push(i.value);
            }
        }
        return arr;
    }

}

export default LinkedList;