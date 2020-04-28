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
