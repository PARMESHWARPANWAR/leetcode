/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    // Create an array of objects, each containing a name and height
    let people = names.map((name, index) => ({
        name: name,
        height: heights[index]
    }));
    
    // Sort the array based on height in descending order
    people.sort((a, b) => b.height - a.height);
    
    // Extract only the names from the sorted array
    return people.map(person => person.name);
};