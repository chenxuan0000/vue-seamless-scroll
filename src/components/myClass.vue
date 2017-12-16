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
          direction: 1 //1 往上 0 往下
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
        if (!this.options.hoverStop || this.moveSwitch) return
        cancelAnimationFrame(this.reqFrame)
      },
      leave () {
        if (!this.options.hoverStop || this.moveSwitch) return
        this._move()
      },
      _move () {
        this.reqFrame = requestAnimationFrame(
          () => {
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
            this._move()
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
        if (!arrayEqual(newData, oldData.concat(oldData))) {
          cancelAnimationFrame(this.reqFrame)
          this._initMove()
        }
      }
    }
  }
</script>
