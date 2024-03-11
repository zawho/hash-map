import LinkedList from "./linked-list";

class HashMap {

    constructor() {
        this.map = new Array(16);
        for (let i = 0; i < this.map.length; i++) {
            this.map[i] = new LinkedList();
        }
    }

    hash(key) {
        const prime = 31;
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i));
        }

        console.log(`${key} will go to bucket ${hashCode % this.map.length}.`);
        return hashCode % this.map.length;
    }

    set(key, value) {
        const index = this.hash(key);
        this.map[index].prepend([key, value]);

        // Add load factor calculation and growth component later.
    }

    get(key) {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].contains(key) != null) {
                console.log(`The value of "${key}" is "${this.map[i].contains(key)}".`);
                return;
            }
            if (i === this.map.length - 1 && this.map[i].contains(key) === null) {
                console.log(`The "${key}" key does not exist.`);
            }
        }
    }

    has(key) {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].contains(key) != null) {
                console.log(`This table contains the "${key}" key.`);
                return true;
            }
        }
        console.log(`This table does not contain the "${key}" key.`);
        return false;
    }

    remove(key) { // Deal with return values for this and all functions.
        for (let i = 0; i < this.map.length; i++) {
            this.map[i].delete(key);
        }
        console.log(this);
    }

    length() {
        let length = 0;
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].head != null) {
                length += 1;
            }
            if (this.map[i].head != null && this.map[i].head.next != null) {
                length += this.map[i].length();
            }
        }
        console.log(`This table contains ${length} keys.`);
        return length;
    }

}

export default HashMap;

/* if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
} */