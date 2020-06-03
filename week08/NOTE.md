# 学习总结
## BFC
- block-level 表示可以被放入bfc
- block-container 表示可以容纳bfc
- block-box = block-level + block-container
- block-box 如果 overflow 是 visible， 那么就跟父bfc合并
- Block-level boxes：flex、table、grid、block
- block containers: block、inline-block、table-cell
- block boxes：block

## 排版
- 正常流排版
  - 收集盒进行
  - 计算盒在行内的排布
  - 计算行的排布
  - vertical-align 最好只取Top Bottom Middle
    - Vertical-align: baseline，是拿自己的 baseline 去对其行的 baseline 
    - Vertical-align: top，middle，bottom，是拿自己的 "顶部" "中线" "底部" 去对其行的 "顶部" "中线" "底部"
    - vertical-align: text-top，text-bottom，是拿自己的 "顶部" "底部" 去对齐行的 text-top 和 text-bottom 线
  - 一个元素有可能生成多个盒
- Flex排版
  - 收集盒进行
  - 计算盒在主轴的排布
  - 计算盒在交叉轴的排布
## 选择器优先级
> 下面列表中，选择器类型的优先级是递增的：

1. 类型选择器（例如，h1）和伪元素（例如，::before）   
2. 类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
3. ID 选择器（例如，#example）
4. 通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）