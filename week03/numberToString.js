module.exports = function numberToString(num, radix) {
    if (Object.prototype.toString.call(num).toLowerCase().indexOf('number') === -1) {
        return 'NaN';
    }
    if (radix < 2 || radix > 36) {
        throw new RangeError('radix argument must be between 2 and 36');
    }
    const radixArr = []
    for (let i = 0; i < 10; ++i) {
        radixArr.push(i + '');
    }
    for (let i = 0; i < 26; ++i) {
        radixArr.push(String.fromCodePoint('a'.codePointAt() + i));
    }
    let integer = Math.floor(num);
    let isPostive = integer < 0;
    let fraction = num - integer;
    let res = [];
    let exp = 0;
    while (integer !== 0) {
        ++exp;
        res.unshift(radixArr[Math.floor(integer % radix)]);
        integer = Math.floor(integer / radix);
    }
    if (fraction - 0 <= Number.EPSILON) {
        return isPostive ? res.join('') : '-' + res.join('');
    }
    let leaveLength = 52 - res.length;
    while (fraction - 0 > Number.EPSILON && leaveLength > 0) {
        --leaveLength;
        let num = Math.floor(fraction * radix)
        res.push(radixArr[num]);
        fraction = fraction * radix - num;
    }
    let before = res.slice(0, exp + 1);
    let after = res.slice(exp + 1);
    return before.join('') + '.' + after.join('');
}