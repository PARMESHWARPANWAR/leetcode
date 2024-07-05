var RandomizedSet = function() {
    this.values = [];
    this.valueToIndex = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valueToIndex.has(val)) {
            return false;
        }
        
        this.values.push(val);
        this.valueToIndex.set(val, this.values.length - 1);
        return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valueToIndex.has(val)) {
            return false;
        }
        
        const indexToRemove = this.valueToIndex.get(val);
        const lastElement = this.values[this.values.length - 1];

        // Swap with the last element
        this.values[indexToRemove] = lastElement;
        this.valueToIndex.set(lastElement, indexToRemove);
        
        // Remove the last element
        this.values.pop();
        this.valueToIndex.delete(val);
        
        return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if (this.values.length === 0) {
            return null; // or throw an error
        }
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */