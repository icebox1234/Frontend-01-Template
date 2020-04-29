const reg = {
    decimal: /(^[0]$)|(^[1-9][0-9]?[e|E][-|+]?[0-9]+$)|(^[1-9][0-9]*$)|(^[.][0-9]+$)|(^[.][0-9]+[e|E][-|+]?[0-9]+$)|(^[0][.][0-9]*$)|(^[0][.][0-9]+[e|E][-|+]?[0-9]+$)|(^[1-9][0-9]*[.][0-9]*$)|(^[1-9][0-9]*[.][0-9]+[e|E][-|+]?[0-9]+$)/,
    binary: /0[b|B][0-1]+/,
    octal: /0[o|O][0-7]+/,
    hex: /0[x|X][0-9a-fA-F]+/
}

module.exports = function stringToNumber(numStr) {
    let isPositive = !numStr.startsWith('-');
    if (!isPositive) {
        numStr = numStr.substr(1);
    }
    if (!(reg.decimal.test(numStr) || reg.binary.test(numStr) || reg.octal.test(numStr) || reg.hex.test(numStr))) {
        return NaN;
    }
    let num = 0;
    if (numStr.match(reg.hex)) {
        num = hexFormat(numStr);
    } else if (numStr.match(reg.octal)) {
        num = octalFormat(numStr);
    } else if (numStr.match(reg.binary)) {
        num = binaryFormat(numStr);
    } else {
        num = decimalFormat(numStr)
    }
    return isPositive ? num : -1 * num;
}
function binaryFormat(numStr) {
    numStr = numStr.substr(2);
    let res = 0;
    for (let i = numStr.length - 1; i >= 0; --i) {
        let num = numStr[i].codePointAt() - '0'.codePointAt();
        res = res * 2 + num;
    }
    return res;
}
function octalFormat(numStr) {
    numStr = numStr.substr(2);
    let res = 0;
    for (let i = numStr.length - 1; i >= 0; --i) {
        res = res * 8 + (numStr[i].codePointAt() - '0'.codePointAt());
    }
    return res;
}
function hexFormat(numStr) {
    numStr = numStr.substr(2);
    let res = 0;
    for (let i = numStr.length - 1; i >= 0; --i) {
        if (numStr[i].match(/[a-fA-F]/)) {
            res = res * 16 + ((numStr[i].codePointAt() - 'A'.codePointAt()) % ('a'.codePointAt() - 'A'.codePointAt())) + 10;
        } else {
            res = res * 16 + (numStr[i].codePointAt() - '0'.codePointAt());
        }
    }
    return res;
}
function decimalFormat(numStr) {
    let exp = numStr.toLowerCase().split('e')[1] || '';
    let decimalNum = numStr.toLowerCase().split('e')[0];
    let res = 0;
    let intNum = decimalNum.split('.')[0] || '';
    let fraction = decimalNum.split('.')[1] || '';

    for (let i = intNum.length - 1; i >= 0; --i) {
        res = res * 10 + intNum[i].codePointAt() - '0'.codePointAt();
    }
    let decimalPoint = 0.1;
    for (let i = fraction.length - 1; i >= 0; --i) {
        res = res + (fraction[i].codePointAt() - '0'.codePointAt()) * decimalPoint;
        decimalPoint *= 0.1;
    }
    let decimalExp = 0;
    for (let i = exp.length - 1; i >= 0; --i) {
        decimalExp = decimalExp * 10 + (exp[i].codePointAt() - '0'.codePointAt());
    }
    for (let i = 0; i < decimalExp; ++i) {
        res *= 10;
    }
    return res;
}