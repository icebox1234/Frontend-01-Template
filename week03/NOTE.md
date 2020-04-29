# 第三周学习总结
## Expression
### Left-Hand-Side Expressions
> 赋值操作的目标
- Member
  ```js
  a.b
  a[b]
  foo`string` // styles-compontents
  super.b
  super[b]
  new.target // 判断函数是否是new调用
  new Foo()
  ```
- New
  ```js
  new Foo
  ```
- Call

  ```js
  foo()
  super()
  foo()[b]
  foo().b
  foo()`string`
  ```
### Right-Hand-Side Expressions
> 赋值操作的来源
- Update

  ```js
  a++
  a--
  --a
  ++a
  ```
- Unary
  >单目运算符
  ```js
  delete a.b
  void 0; // 生成undefined
  typeof a
  +a
  -a
  ~a
  !a // !!a 转换为boolean值
  await a
  ```
- Exponental
```js
** //唯一右结合的运算符
```
- Multiplicative
```js
\*  /   %
```
- Shift
```js
<< >> >>>
```
- Relationship
```js
< > <= >= instanceof in
```
- Equality
```js
  == != === !==
```
- Bitwise
```js
& ^ |
```
- Logical
```js
&& ||
```
- Conditional
```js
?: //三目运算符
```
### 类型转换
|           |  Number  |  String  |  Bboolean  | Undefined | Null | Object | Symbol |
|  ----     | ----     |  ----    |  ----      |  ----     |  ----|  ----  |  ----  |
| Number    |          |          |    0 false        |           |      |   boxing     |        |
| String    |          |          |   "" false         |           |      |   boxing     |        |
| Boolean  |   true 1   false 0       |    'true'  'false'      |            |         |      |    boxing   |      |
| Undefined |      0    |     'undefined'     |    false        |           |      |        |        |
| Null      |     0     |  'null'        |            |           |      |        |        |
| Object    |    valueOf      |   valueOf  toString       |    true        |           |      |        |        |
| Symbol    |          |          |            |           |      |    boxing    |        |
- 装箱拆箱

  装箱：基础类型 -> 内置对象 `Boolean String Boolean ...`

  拆箱：内置对象 -> 基础类型, 会调用`toPrimitive valueOf toString`进行转换
- 类型的判断

  - typeof
  - Obejct.prototype.toString.call
  - instanceof

## 语句
- 简单语句

  - ExpressionStatement

    ```js
    a = 1 + 2;
    ```

  - EmptyStatement

    ```js
    ;
    ```

  - DebuggerStatement

    ```js
    debugger
    ```

  - ThrowStatement
    ```js
    throw 表达式
    ```

  - ContinueStatement

    ```js
    continue label
    ```

  - BreakStatement

    ```js
    break label
    ```

  - ReturnStatement

    ```js
    return 表达式
    ```
- 组合语句

  - BlockStatement

    多条语句合并成一条语句

    为const let 提供作用域

    ```js
    {}
    ```

    - [[type]]: normal
    - [[value]]: --
    - [[target]]: --

    > block内产生了非normal的结果时，后面的语句将不再执行。

  - IfStatement

  - SwitchStatement

  - LabelledStatement
    - [[type]]: break continue
    - [[value]]: --
    - [[target]]: label

  - IterationStatement

    ```js
    while()
    do while()
    for( ; ; )
    for( in )
    for( of )
    for await(of)
    ```

    for会独立产生新的作用域

  - TryStatement

    ```js
    try {
    
    } catch () {
    
    } finally {
    
    }
    ```

    - [[type]]: return
    - [[value]]: --
    - [[target]]: label

  target=label类型的语句只在IterationStatement内有效果
- 声明

  - FunctionDeclaration

    ```js
    function foo() {} //函数声明 
    var o = function foo() {} // 函数表达式
    ```

  - GeneratorDeclaration

    ```js
    function* foo() {
    	yield 1;
    }
    let g = foo();
    g.next().value;
    ```

  - AsyncFunctionDeclaration

    ```js
    async function foo() {
      await xxx;
    }
    ```

  - AsyncGeneratorDeclaration

    ```js
    async function* gen() {
      await xxx;
    }
    ```

  - VariableStatement

    ```js
    var let const
    ```

  - ClassDeclaration

    ```js
    class foo {}
    ```

  - LexicalDeclaration
## Runtime

- Completion Record
  - [[type]]: mormal, break, continue, return, or throw
  - [[value]]: Types
  - [[target]]: label
- Lexical Enviorment

## 预处理/变量提升

```js
var a = 2;
void function() {
  a = 1;
  return;
  var a; // const a
}()
```

- var变量声明和函数声明会预处理。

- var值预处理声明部分

- 函数预处理整体

## 作用域

函数的执行上下文

在多层作用域中进行LHS和RHS操作，直到找到为止，形成作用域链

## Object

> 状态 行为 唯一性

## Object in JavaScript

- Property

  - Key
    - Symbol
    - String
  - Value
    - Data Property
      - [[value]]
      - writable
      - emumerable
      - configurable
    - Accessor Property
      - get
      - set
      - emumerable
      - configurable

- [[Prototype]]

  原型链
## Object API

- 基础API

  `{} . [] Object.defineProperty`

- 原型API

  `Object.create  Object.setPrototypeOf  Object.getPrototypeOf`

- 基于类的面向对象API(模拟)

  `new class extends`

- 基于原型的面向对象API

  `new function prototype`
