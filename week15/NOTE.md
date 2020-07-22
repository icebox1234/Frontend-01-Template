# 学习总结
## 实现vue的SFC
- 内容的重点在于webpack中loader的开发
- loader实际上是一个Function,该函数接受一个string变量，在函数内部经过parser处理后返回一个新的string
  ```js
   function loader(string){
    return someParse(string);
   }
  ```
- loader是webpack提供的一种多文件类型处理机制，loader在这个机制中充当了转换器的角色，负责把某种文件格式的内容转换成 webpack 可以支持打包的模块

## Animation
  动画的实现离不开setTimeout、setInterval以及requestFrameAnimation。如果有多个动画，则会产生多个异步函数，会在性能上大打折扣，所以需要一个能对多个动画进行统一管理。所以在设计上，一个完整的Animation组件，需要两个类：1.Animation负责对Dom元素的的动画操作。2、Timeline对多个Animation进行统一管理