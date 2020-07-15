# 组件化

## 使用JSX实现自定义组件
### 环境准备
#### webpack配置
```js
const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [["@babel/plugin-transform-react-jsx", { pragma: 'createElement' }]]
                    }
                }
            }
        ]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
};
```
#### package安装
```js
{
  "name": "20200709",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.10.4",
    "@babel/plugin-transform-react-jsx": "^7.10.4",
    "@babel/preset-env": "^7.10.4",
    "babel-loader": "^8.1.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
}
```
### 使用JSX语法来自创建自定义组件
#### 自定义组件
大致代码如下
```JS
let component = <MyComponent title="ABC" data={123}>
    <div class="ABC">test1</div>
    <span>test2</span>
</MyComponent>
```
经过webpack的编译后，会生成如下代码
```JS
var component = createElement(MyComponent, {
    title: 'ABC',
    data: 123
}, createElement("div", {class: "ABC"}, "test1"),
createElement("span", null, "text2"))
```
> - 这里需要注意的是，在JSX中，元素标签大写为自定义组件，小写会被编译为生成原生元素
> - 使用 jsx 创建的组件树，实例化时是先实例化子组件，然后再实例化父组件，因为 jsx 语法会变编译为函数调用，而子组件都是作为额外的参数传递给父组件。

