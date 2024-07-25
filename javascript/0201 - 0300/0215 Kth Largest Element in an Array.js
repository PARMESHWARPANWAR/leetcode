class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    bubbleUp(i) {
        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }
    
    bubbleDown(i) {
        let minIndex = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);
        
        if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
            minIndex = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
            minIndex = right;
        }
        
        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.bubbleDown(minIndex);
        }
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();
    
    // Build a min-heap of k largest elements
    for (let num of nums) {
        if (minHeap.size() < k) {
            minHeap.push(num);
        } else if (num > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(num);
        }
    }
    
    // The root of the heap is the kth largest element
    return minHeap.peek();
};