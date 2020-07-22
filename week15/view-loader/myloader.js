let parse = require('./parser');

module.exports = function (source, map) {
    // console.log(source);
    // console.log(parse.parseHTML(source));
    // console.log('my load is running');
    // console.log(this.resourcePath);
    let tree = parse.parseHTML(source);
    // console.log(tree.children[2]);

    let template = null;
    let script = null;

    for (let node of tree.children) {
        if (node.tagName === 'template') {
            // console.log(node);
            template = node.children.filter(e => e.type !== 'text')[0];
        }
        if (node.tagName === 'script') {
            // console.log(node.children[0].content);
            script = node.children[0].content;
        }
    }

    let createCode = '';

    let visit = (node, depth) => {
        if (node.type === 'text') {
            return JSON.stringify(node.content);
        }
        let attrs = {};
        for (let attribute of node.attributes) {
            attrs[attribute.name] = attribute.value;
        }
        let children = node.children.map(child => {
            return visit(child, depth + 1);
        })
        // console.log(JSON.stringify(children));
        return `createElement('${node.tagName}', ${JSON.stringify(attrs)}, ${children})`;
    }


    let res = `
    import { createElement, Text, Wrapper } from './createElement';
    export class Carousel {
        render(){
            return ${visit(template, 0)}
        }
        mountTo(parent) {
            this.render().mountTo(parent);
        }
        setAttribute(name, value) {
            this[name] = value;
        }
    }
    `;
    console.log(res);

    return res;
}