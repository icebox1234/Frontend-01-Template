var page = require('webpage').create();



page.open('http://localhost:8081', function (status) {
    if (status === 'success') {

        var body = page.evaluate(function () {
            var toString = function (pad, element) {
                var children = element.childNodes;
                var childrenString = '';
                for (var i = 0; i < children.length; ++i) {
                    childrenString += toString('  ' + pad, children[i]) + '\n';
                }
                var name;
                if (element.nodeType === Node.TEXT_NODE) {
                    name = '#text ' + JSON.stringify(element.textContent);
                }
                if (element.nodeType === Node.ELEMENT_NODE) {
                    name = element.tagName.toLowerCase();
                }
                return pad + name + (childrenString ? '\n' + childrenString : '');
            }
            return toString('', document.body);
        });
        console.log('--------------------')
        console.log(body);
    }
    phantom.exit();
});