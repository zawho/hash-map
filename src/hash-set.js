import LinkedList from "./linked-list";

class HashSet {

    constructor() {
        this.set = new Array(16);
        for (let i = 0; i < this.set.length; i++) {
            this.set[i] = new LinkedList();
        }
    }

    hash(key) {
        const prime = 31;
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i));
        }

        console.log(`${key} will go to bucket ${hashCode % this.set.length}.`);
        return hashCode % this.set.length;
    }

    add(key) {
        const index = this.hash(key);
        this.set[index].prepend([key]);
        
        const loadFactor = 0.75;
        let filledBuckets = 0;
        
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i].head != null) {
                filledBuckets += 1;
            }
        }

        const currentCapacity = filledBuckets / this.set.length;

        if (currentCapacity >= loadFactor) {
            this.set[this.set.length] = new LinkedList();
        }

    }

    has(key) {
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i].contains(key) != null) {
                console.log(`This table contains the "${key}" key.`);
                return true;
            }
        }
        console.log(`This table does not contain the "${key}" key.`);
        return false;
    }

    remove(key) {
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i].delete(key) === true) {
                console.log(`The ${key} key has been removed.`)
                return true;
            }
        }
        console.log (`This table does not contain the "${key}" key.`)
        return false;
    }

    length() {
        let length = 0;
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i].head != null) {
                length += 1;
            }
            if (this.set[i].head != null && this.set[i].head.next != null) {
                length += this.set[i].length();
            }
        }
        console.log(`This table contains ${length} keys.`);
        return length;
    }

    clear() {
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i].head != null) {
                this.set[i].head = null;
            }
        }
    }

    keys() {
        const allKeysArr = [];
        let keyArr;
        for (let i = 0; i < this.set.length; i++) {
            keyArr = this.set[i].keysAndValues(true, null);
            for (let j = 0; j < keyArr.length; j++) {
                allKeysArr.push(keyArr[j]);
            } 
        }
        console.log(allKeysArr);
        return allKeysArr;
    }
    
}

export default HashSet;