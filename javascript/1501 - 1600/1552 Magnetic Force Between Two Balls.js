/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    function canPlace(dist) {
        let count = 1;
        let prev = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i] - prev >= dist) {
                count++;
                prev = position[i];
                if (count === m) {
                    return true;
                }
            }
        }
        return false;
    }

    position.sort((a, b) => a - b);
    let left = 1;
    let right = position[position.length - 1] - position[0];
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canPlace(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};