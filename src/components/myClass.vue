<template>
    <div @mouseenter="enter" @mouseleave="leave">
        <div ref="wrapper" :style="pos">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  require('comutils/animationFrame')
  const arrayEqual = require('comutils/arrayEqual')
  export default {
    data () {
      return {
        yPos: 0,
        reqFrame: null
      }
    },
    props: {
      data: {
        type: Array,
        default: []
      },
      classOption: {
        type: Object,
        default: {}
      }
    },
    computed: {
      pos () {
        return {transform: `translate(0,${this.yPos}px)`}
      },
      defaultOption () {
        return {
          step: 1, //步长
          limitMoveNum: 5, //启动无缝滚动最小数据数
          hoverStop: true, //是否启用鼠标hover控制
          direction: 1, //1 往上 0 往下
          openWatch: true, //开启data实时监听
          singleHeight: 0, //单条数据高度有值hoverStop关闭
          waitTime: 1000 //单步停止等待时间
        }
      },
      options () {
        return Object.assign({}, this.defaultOption, this.classOption)
      }
      ,
      moveSwitch () {
        return this.data.length < this.options.limitMoveNum
      }
    },
    methods: {
      enter () {
        if (!this.options.openWatch || !!this.options.singleHeight ||!this.options.hoverStop || this.moveSwitch) return
        cancelAnimationFrame(this.reqFrame)
      },
      leave () {
        if (!this.options.openWatch || !!this.options.singleHeight ||!this.options.hoverStop || this.moveSwitch) return
        this._move()
      },
      _move () {
        this.reqFrame = requestAnimationFrame(
          () => {
            let timer
            let h = this.$refs.wrapper.offsetHeight / 2
            let direction = this.options.direction
            if (direction === 1) {
              if (Math.abs(this.yPos) >= h) this.yPos = 0
            } else {
              if (this.yPos >= 0) this.yPos = h * -1
            }
            if (direction === 1) {
              this.yPos -= this.options.step
            } else {
              this.yPos += this.options.step
            }
            if (!!this.options.singleHeight) {
              if (Math.abs(this.yPos) % this.options.singleHeight === 0) {
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                  this._move()
                }, this.options.waitTime)
              } else {
                this._move()
              }
            }else {
              this._move()
            }
          }
        )
      },
      _initMove () {
        if (this.moveSwitch) {
          cancelAnimationFrame(this.reqFrame)
          this.yPos = 0
        } else {
          this.$emit('copyData')
          if (this.options.direction !== 1) {
            setTimeout(() => {
              this.yPos = this.$refs.wrapper.offsetHeight / 2 * -1
            }, 20)
          }
          this._move()
        }
      }
    },
    mounted () {
      this._initMove()
    },
    watch: {
      data (newData, oldData) {
        if (!this.options.openWatch) return
        if (!arrayEqual(newData, oldData.concat(oldData))) {
          cancelAnimationFrame(this.reqFrame)
          this._initMove()
        }
      }
    }
  }
</script>
