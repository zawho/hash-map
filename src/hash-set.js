import LinkedList from "./linked-list";

class HashSet {

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

    set(key) {
        const index = this.hash(key);
        this.map[index].prepend([key]);
        
        const loadFactor = 0.75;
        let filledBuckets = 0;
        
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].head != null) {
                filledBuckets += 1;
            }
        }

        const currentCapacity = filledBuckets / this.map.length;

        if (currentCapacity >= loadFactor) {
            this.map[this.map.length] = new LinkedList();
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

    remove(key) {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].delete(key) === true) {
                console.log(this);
                return true;
            }
        }
        console.log (`This table does not contain the "${key}" key.`)
        return false;
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

    clear() {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].head != null) {
                this.map[i].head = null;
            }
        }
    }

    keys() {
        const allKeysArr = [];
        let keyArr;
        for (let i = 0; i < this.map.length; i++) {
            keyArr = this.map[i].keysAndValues(true, null);
            for (let j = 0; j < keyArr.length; j++) {
                allKeysArr.push(keyArr[j]);
            } 
        }
        console.log(allKeysArr);
        return allKeysArr;
    }
    
}

export default HashSet;