class HashMap {

    constructor() {
        this.map = new Array(16);
    }

    hash(key) {
        const prime = 31;
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i));
        }

        console.log(hashCode);
        console.log(hashCode % this.map.length);
        return hashCode % this.map.length;
    }

}

export default HashMap;

/* if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
} */