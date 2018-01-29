# CSS-flexbox-learning-note

Youtube tutorial link : https://www.youtube.com/watch?v=_vEjcueG3zY&index=1&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid

## flex-container(即设置display:flex的容器)

### flex-direction

默认为 row

- row
- column
- row-reverse
- column-reverse

### flex-wrap

默认为 nowrap

> 这将导致当宽度超过容器宽度时，均分宽度到items，不会换行

- wrap : 超过时自动换行，保证item的宽度为设定值
- wrap-reverse : cross-axis 和 main-axis 方向反向

### justify-content(main axis轴的对齐)

默认为 flex-start

- flex-end : 末端对齐
- center : 居中对齐
- space-between : 两端对齐
- space-around : 左右保留间距的两端对齐

### align-items(cross axis轴的对齐)

默认为 stretch

- baseline : 内容对齐
- 其他的同justify-content

### align-content(flex-wrap为wrap时作用，设置空位的位置)

默认为stretch

- flex-start : 让空位置底
- flex-end : 让空位置顶
- space-between
- space-around

## flex-item(flex-container下的item)

### flex属性(包含下列三个属性)

当设置为1时，让当前container下的flex-items均分长度

#### flex-grow

默认为0，表示如何处理多余的空间

#### flex-shrink

表示空间不足时贡献自己的空间

#### flex-basis(px)

row : width

column : height

### order属性(类似z-index)

默认为0

当设置为大于0的数值时（根据数值排列），移动当前flex-item到最末尾

当设置为小于0的数值时，同理，但不改变DOM元素

> 警告： 这样设置会导致复制时的顺序出现问题

### align-self

align-items的子项

## 附录

### 100vh

vh 指的是 viewport height, 100vh 代表height:100%
