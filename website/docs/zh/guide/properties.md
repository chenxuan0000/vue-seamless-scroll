# 组件配置

## data

- type: `Array`
- required: `true`

无缝滚动 list 数据。

组件内部只关注 data 数组的 length。

## classOption

### step

- type: `Number`
- required: `false`
- default：`1`

数值越大速度滚动越快。

step 值不建议太小,不然会有卡顿效果(如果设置了单步滚动,step 需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~,比如单步设置的 30,step 不能为 4)。

### limitMoveNum

- type: `Number`
- required: `false`
- default：`5`

开启无缝滚动的数据量。

### hoverStop

- type: `Boolean`
- required: `false`
- default：`false`

是否启用鼠标 hover 控制。

### direction

- type: `Number`
- required: `false`
- default：`1`

方向: 0 往下 1 往上 2 向左 3 向右。

### openTouch

- type: `Boolean`
- required: `false`
- default：`true`

移动端开启 touch 滑动。

### singleHeight

- type: `Number`
- required: `false`
- default：`0`

单步运动停止的高度(默认值 0 是无缝不停止的滚动)，direction 为 0|1 时生效。

### singleWidth

- type: `Number`
- required: `false`
- default：`0`

单步运动停止的宽度(默认值 0 是无缝不停止的滚动)，direction 为 2|3 时生效。

### waitTime

- type: `Number`
- required: `false`
- default：`1000`

单步停止等待时间(默认值 1000ms)。

### switchOffset

- type: `Number`
- required: `false`
- default：`30`

左右切换按钮距离左右边界的边距(px)。

### autoPlay

- type: `Boolean`
- required: `false`
- default：`true`

需要实现手动切换左右滚动的时候,必须设置`autoPlay:false`（1.1.17 版本开始，只需要设置`navigation:false`）,目前不支持环路。

### switchSingleStep

- type: `Number`
- required: `false`
- default：`134`

手动单步切换 step 值(px)。

### switchDelay

- type: `Number`
- required: `false`
- default：`400`

单步切换的动画时间(ms)。

### switchDisabledClass

- type: `String`
- required: `false`
- default：`disabled`

不可以点击状态的 switch 按钮父元素的类名。

### isSingleRemUnit

- type: `Boolean`
- required: `false`
- default：`false`

singleHeight and singleWidth 是否开启 rem 度量。

### navigation

- type: `Boolean`
- required: `false`
- default：`false`

左右方向的滚动是否显示控制器按钮，true 的时候 autoPlay 自动变为 false。
