import { parseHTML } from '../src/parser.js';
let assert = require('assert');

it('parse a single element', () => {
    let doc1 = parseHTML('<div></div>');
    let div = doc1.children[0];
    assert.equal(doc1.type, 'document');
    assert.equal(div.type, 'element');
    assert.equal(div.tagName, 'div');
    assert.equal(div.children.length, 0);
    assert.equal(div.attributes.length, 0);
});

it('parse a single element with text content', () => {
    let doc = parseHTML('<div>content</div>');
    let text = doc.children;
    assert.equal(doc.type, 'document');
    assert.equal(doc.children.length, 1);
    assert.equal(doc.children[0].children[0].type, 'text');
    assert.equal(doc.children[0].children[0].content, 'content');
});

it('parse a single element with attribute', () => {
    let doc = parseHTML('<div style="display: flex">content</div>');
    assert.equal(doc.children[0].attributes.length, 1);
    assert.equal(doc.children[0].attributes[0].name, 'style');
    assert.equal(doc.children[0].attributes[0].value, 'display: flex');
});

it('tag mismatch', () => {
    try {
        let doc = parseHTML('<div></vid>');
    } catch (e) {
        assert.equal(e.message, 'Tag start end does not match')
    }
});

it('text wih <', () => {
    let doc = parseHTML('<div>a < b</div>');
    assert.equal(doc.children[0].children[0].type, 'text')
    assert.equal(doc.children[0].children[0].content, 'a < b')
});

it('with property', () => {
    let doc = parseHTML('<div     id=a class=\'cls\' data="   abc" >content</div>');
    let div = doc.children[0];

    let count = 0;
    for (let attr of div.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, 'a');
            return;
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, 'cls');
            return;
        }
        if (attr.name === 'data') {
            count++;
            assert.equal(attr.value, 'abc');
            return;
        }
    }
    assert.ok(count === 3);
});



it('selfClosing 1', () => {
    let doc = parseHTML('<img src="url"/>');
    let ele = doc.children[0];
    for (let attr of ele.attributes) {
        if (attr.name === 'src') {
            assert.equal(attr.value, 'url');
            return;
        }
    }
    assert.ok(false);
});

it('selfClosing 3', () => {
    let doc = parseHTML('<input disabled    />');
    console.log(doc.children[0].attributes);
});


it('selfClosing 3', () => {
    let doc = parseHTML('<img/>');
});

it('selfClosing 4', () => {
    let doc = parseHTML('<img src=url/>');
});



it('style tag', () => {
    let doc = parseHTML('<style></style>');
    assert.equal(doc.children[0].tagName, 'style');
});




it('script', () => {
    let content = `
        <div>a</div>
        <span>b</span>
        /script>
        <script
        </script
        </script          
        </scrip
        </scri
        </scr
        </sc
        </s
        </
    `
    let doc = parseHTML(`
    <script>${content}</script>
    `);
    console.log(JSON.stringify(doc.children[1].children[0].content));
    console.log('-------------------');
    console.log(JSON.stringify(content));
    assert.equal(JSON.stringify(doc.children[1].children[0].content), JSON.stringify(content))
});



it('with property', () => {
    let doc = parseHTML('<div     id=a class=\'cls\' data="   abc" >content</div>');
    let div = doc.children[0];

    let count = 0;
    for (let attr of div.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, 'a');
            return;
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, 'cls');
            return;
        }
        if (attr.name === 'data') {
            count++;
            assert.equal(attr.value, 'abc');
            return;
        }
    }
    assert.ok(count === 3);
});

