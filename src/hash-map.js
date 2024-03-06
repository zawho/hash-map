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

        console.log(`${key} will go to bucket ${hashCode % this.map.length}`);
        return hashCode % this.map.length;
    }

    set(key, value) {
        const index = this.hash(key);
        this.map[index].prepend([key, value]);

        // Add load factor calculation and growth component later.
    }

}

export default HashMap;

/* if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
} */