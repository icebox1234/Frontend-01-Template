# 毕业总结
## 知识的粗略总结
### 重学前端
> HTML、CSS、JS是前端的基石，三者的共同作用构成了目前丰富多彩的前端生态。
#### HTML、CSS、JS
- <font size=5>HTML</font>负责UI骨架内容的呈现，良好的HTML语义使用不但能便于后续开发中对于HTML代码的阅读，同时也能更好应用于SEO
  - 标准见于[whatwg](https://html.spec.whatwg.org/multipage/syntax.html)
- <font size=5>CSS</font>负责丰富由HTML骨架内容的样式，对UI内容进行排版，良好的CSS可以有效的将用户的注意力进行有意义的转意的同时给给予用户良好的交互体验
  - CSS语法中提供了大量的选择器以供开发者对特定的目标元素群进行样式上的操控或者排版
  - 盒模型、IFC、BFC
 - <font size=5>JS</font>是前端基石中最重要的一部分，负责UI与数据状态的同步。
   - JS标准收录于ECMA-262中
   - JS使用浏览器提供的DOM API对在浏览器中呈现的UI进行改变
   - JS使用浏览器提供的BOM API对浏览器所产生的交互事件（点击、滚动等）进行相应
   - JS异步
     - JS异步是JS中非常重要的一部分，其表现形式为回调，通过将回调作为参数传递给异步API，通过调用回调的方式传递异步操作的结果
     - JS的异步主要用于处理宿主环境的事件以及网络请求
     - JS是单线程处理，因此JS的异步任务藉由任务队列进行处理，任务队列又分为宏观任务队列和微观任务队列
#### 浏览器工作原理
- url ---HTTP---> HTML ---parse---> DOM ---CSS Computing---> DOM with CSS (computedStyle) ---layout---> DOM wih position ---render---> bitmap
- toy-browser
  - HTML ------> DOM with position 这一过程的实现原理
  - 由于网络协议中对于数据大小的限制，HTML数据可能会议进行切片分割，因此使用状态机来对这种流式数据进行处理
  - [whatwg中关于HTML的80中状态处理](https://html.spec.whatwg.org/multipage/parsing.html)
  - CSS计算的原则：尽可能地早。所以在element创建的时候就进行CSS的计算
### 编程能力
#### 井字棋、寻路、KMP、wildcard、正则、proxy、Range
- 一些前端工作中常见的编程知识（Promise、Proxy、正则）
- 常见的算法知识（字符串处理）
- 前端中对于字符串的处理很重要，整个课程的编程实践中对于字符串的处理都占了很大的比例
### toy-React和animation、gesture组件
- 组件化的设计思路
- 组件和对象的区别
- 组件的持续集成
### 工具链
- 完整的工具链开发流程
  - init yeoman generator
  - test mocha
  - publish publish-tool ---client_id---> github ---code---> publish-server ---code---> github ---token---> publish-server -authoritation check-> ---package---> server

## 学习方法总结
- 建立知识体系
  - 对于知识点一定要归类。前端的知识点繁多，如果不进行归类，很快就会遗忘，最好的方法是有一个属于自己的思维导图，将知识点做详细的梳理，把其放入到自己的知识分类当中。
- 勇于实践代码
  - 跟着winter老师学习的过程中最大的特点就是课上的实践内容非常多。在这一点上我受益良多，只有自己亲自去写代码，并调试写代码过程中遇到的问题，才能真正领悟到整个代码的设计思想。
## 感谢
非常感谢winter老师几个月以来的教导，极大的拓宽了我在前端方面知识的广度。在目前这个阶段有一个优秀的领路人对我以后前端相关发展帮助很大，感谢极客邦与老师以及各位班班、助教在这段有意义的时间的细心陪伴
