# 总结

> Range API

- 对 DOM 元素进行精准修改

```js
var range = new Range()
range.setStart(element, 9)
range.setEnd(element, 4)

range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode
range.selectNodeContents

var fragment = range.extractContents()
range.insertNode(document.createTextNode('aaaa'))
```

> CSSOM API 下面两个 API 是很重要

- document.styleSheets
- window.getComputedStyle(element, pseudoElement)

```js
document.styleSheets
document.styleSheets[0].cssRules
document.styleSheets[0].insertRule('p{color: pink}', 0)
document.styleSheets[0].removeRule(0)

window.getComputedStyle(element, pseudoElement)
// element 想要获取的元素
// pseudoElement 可选 伪元素
```
