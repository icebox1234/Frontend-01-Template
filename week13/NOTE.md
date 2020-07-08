# 总结

## 如何设计组件状态
- property/attribute/state/config
- property 可JS Set 及 JS Change
- attribute 可JS Set 及 JS Change 及 Mark Up
- state 可User Input
- config 可JS Set

## 组件基本结构
```
class MyComponent {
    constructor(config) {
        this.state {
            i: 1
        }
    }
    get prop() {

    }
    set prop() {

    }
    setAttribute(attr) {

    }
    getAttribute(attr, value) {

    }
    get children() {

    }
    set children() {

    }
}
```
## 组件生命周期
``` 
created - mounte - unmount
render/update
destoryed
<!-- 改变状态方式 -->
JS Set
JS Change
User Input

```
## 如何设计轮播图组件
```
config
    mode,userPAF,userTimeout
state
    active
property
    loop time imglist autoplay color forward 
attribute
    start
children
    img
event
    click swipe hover 
method
    go() next() play()
```