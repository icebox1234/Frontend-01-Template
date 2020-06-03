const reg = {
    tag: /^[\w-]+/,
    id: /#([\w-]+)/,
    class: /\.([\w-]+)/g,
    property: /\[([\w-]+[*^$~|]?=[\w-\"\']+)\]/g
}

function match(selector, element) {
    return compoundSelectorMatch(selector, element);
}

function compoundSelectorMatch(selector, element) {
    let tag = selector.match(reg.tag);
    let id = selector.match(reg.id);
    let klass = selector.match(reg.class);
    let property = selector.match(reg.property);
    // console.log(tag, id, klass, property);
    if (tag) {
        if (element.tagName.toLowerCase() !== tag[0]) {
            return false;
        }
    }
    if (id) {
        if (element.id !== id[1]) {
            return false;
        }
    }
    if (klass) {
        // console.log(klass.map(item => item.replace(/^\./, '')));
        if (klass.map(item => item.replace(/^\./, '')).some(item => element.className.indexOf(item) === -1)) {
            return false;
        }
    }
    if (property) {
        // console.log(property);
        property = property.map(item => item.replace(/([\[]?)([\]]?)/g, '')).map(item => {
            let [name, value] = item.split(/[*^$~|]?=/);
            let combinator = item.replace(/([\w-]+)([*^$~|]?=)([\w-\'\"]+)/, '$2');
            return { name: name, value: value.replace(/([\"]*)/g, ''), combinator: combinator };
        })
        // console.log(property);
        for (let prop of property) {
            // console.log(element.getAttribute(prop.name), prop.value);
            if (!element.hasAttribute(prop.name)) {
                return false;
            }
            let attrValue = element.getAttribute(prop.name);
            if (combinator === '=' && attrValue !== prop.value) {
                return false;
            }
            if (combinator === '~=' && !attrValue.split(' ').includes(value)) {
                return false;
            }
            if (combinator === '|=' && !attrValue.startWith(value) && !attrValue.startWith(`${value}-`)) {
                return false;
            }
            if (combinator === '^=' && !attrValue.startWith(value)) {
                return false;
            }
            if (combinator === '$=' && !attrValue.endWith(value)) {
                return false;
            }
            if (combinator === '*=' && !attrValue.includes(value)) {
                return false;
            }
        }
    }
    return true;
}
let res = compoundSelectorMatch('div#container.test.asd[title="123"][data-test="456"]', document.body.querySelector('div#container.test.asd[title="123"][data-test="456"]'));
// console.log(res);
// let tes4324 = document.body.querySelector('div#container.test.asd[title^="123"][data-test|="456"]')
// console.log(tes4324)

