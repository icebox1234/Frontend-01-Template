# 第四周学习总结
## 事件循环&宏任务&微任务
- 其实所有的JS代码都是一个微任务，只是哪些微任务构成了一个宏任务；执行在JS引擎里的就是微任务，执行在JS引擎之外的就是宏任务，循环宏任务的工作就是事件循环。
- 事件循环不属于JavaScript引擎实现的东西，而是由浏览器或node js宿主环境实现的
- script标签、UI交互、setTimeout、setInterval都会创建宏任务
- 一个宏任务只存在一个微任务队列，微任务根据入队时间顺序执行
- Promise的then方法以及async函数里的await会将一个微任务入队，微任务列表里的微任务按入队顺序执行
## 宏任务&微任务执行顺序 实验代码
### 代码
```js
async function afoo() {
    console.log("-2")


    await new Promise(resolve => resolve());
    console.log("-1")
}


new Promise(resolve => (console.log("0"), resolve()))
    .then(() => (
        console.log("1"),
        new Promise(resolve => resolve())
            .then(() => console.log("1.5"))));


setTimeout(function () {
    console.log("2");

    new Promise(resolve => resolve()).then(console.log("3"))


}, 0)
console.log("4");
console.log("5");
afoo();
```
### 解析：
- 第一个宏任务：
  - 3
    - 入队 4
  - 8
  - 9
  - 1
    - 入队 2
  - 4
    - 入队 5
  - 2
  - 5
- 第二个宏任务：
  - 6
    - 入队 7
  - 7
## 与ECMAScript相关的章节
- RunJobs（P.104）

