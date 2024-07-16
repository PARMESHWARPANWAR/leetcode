/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    let i = 0;
    
    function parse() {
        let count = 0;
        while (i < formula.length && /\d/.test(formula[i])) {
            count = count * 10 + parseInt(formula[i]);
            i++;
        }
        return count || 1;
    }
    
    function parseAtom() {
        let atom = formula[i++];
        while (i < formula.length && /[a-z]/.test(formula[i])) {
            atom += formula[i++];
        }
        return atom;
    }
    
    const stack = [new Map()];
    
    while (i < formula.length) {
        if (formula[i] === '(') {
            stack.push(new Map());
            i++;
        } else if (formula[i] === ')') {
            i++;
            let count = parse();
            let top = stack.pop();
            let peek = stack[stack.length - 1];
            for (let [name, v] of top) {
                peek.set(name, (peek.get(name) || 0) + v * count);
            }
        } else {
            let name = parseAtom();
            let count = parse();
            let peek = stack[stack.length - 1];
            peek.set(name, (peek.get(name) || 0) + count);
        }
    }
    
    let atoms = Array.from(stack[0]);
    atoms.sort((a, b) => a[0].localeCompare(b[0]));
    
    return atoms.map(([name, count]) => count > 1 ? name + count : name).join('')
};