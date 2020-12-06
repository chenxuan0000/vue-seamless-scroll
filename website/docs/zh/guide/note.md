# 注意项

- 1.最外层容器需要手动设置`width、height、overflow:hidden`

- 2.左右的无缝滚动需要给主内容区域（即默认slot插槽提供）设定合适的`css width`属性(否则无法正确计算实际宽度)。
 也可以通过给他设置为`display:flex;`无需设置`css width`属性

- 3.step值不建议太小,不然会有卡顿效果(如果设置了单步滚动,step需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~,比如单步设置的30,step不能为4)

- 4.需要实现手动切换左右滚动的时候,必须设置`autoPlay:false`（1.1.17版本开始，只需要设置`navigation:false`）,目前不支持环路

- 5.提供了`slot left-switch || right-switch`可以自由定义需要的按钮样式 外层有div已经定位了位置居中,距离两边侧的距离可以通过switchOffset参数调整

- 6.当按钮到达边界位置,会自动为无法点击状态按钮加上定义的`switchDisabledClass: 'disabled'`,可以按需配置