class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.list = [];
    }
    insert(val) {
        if (this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }
    remove(val) {
        if (!this.map.has(val)) return false;
        let idx = this.map.get(val), last = this.list.pop();
        if (idx < this.list.length) {
            this.list[idx] = last;
            this.map.set(last, idx);
        }
        this.map.delete(val);
        return true;
    }
    getRandom() {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}
