/**
 * 
 * @param {string} string 
 * @return {boolean}
 */
function match(string) {
    let state = start;
    for (let char of string) {
        state = state(char);
    }
    return state === end;
}
function start(char) {
    if (char === 'a') {
        return foundA;
    } else {
        return start;
    }
}
function foundA(char) {
    if (char === 'b') {
        return foundB;
    } else {
        start(char);
    }
}
function foundB(char) {
    if (char === 'a') {
        return foundA2;
    } else {
        return start(char);
    }
}
function foundA2(char) {
    if (char === 'b') {
        return foundB2;
    } else {
        return start(char);
    }
}
function foundB2(char) {
    if (char === 'a') {
        return foundA3;
    } else {
        return start(char);
    }
}
function foundA3(char) {
    if (char === 'b') {
        return foundB3;
    } else {
        return start(char);
    }
}
function foundB3(char) {
    if (char === 'x') {
        return end;
    } else {
        return foundB2(char);
    }
}
function end(char) {
    return end;
}


console.log(match('abxababx')); //false
console.log(match('abababc')); //false
console.log(match('abababx')); //true
console.log(match('ababababababababababababx')); //true
console.log(match('abababbbbbbabababx')); //true
