<template>
  <div ref="wrap">
    <div
      :style="leftSwitch"
      v-if="navigation"
      :class="leftSwitchClass"
      @click="leftSwitchClick"
    >
      <slot name="left-switch"></slot>
    </div>
    <div
      :style="rightSwitch"
      v-if="navigation"
      :class="rightSwitchClass"
      @click="rightSwitchClick"
    >
      <slot name="right-switch"></slot>
    </div>
    <div
      ref="realBox"
      :style="pos"
      @mouseenter="enter"
      @mouseleave="leave"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div ref="slotList" :style="float">
        <slot></slot>
      </div>
      <div v-html="copyHtml" :style="float"></div>
    </div>
  </div>
</template>

<script>
  require('comutils/animationFrame')()
  const arrayEqual = require('comutils/arrayEqual')
  const copyObj = require('comutils/copyObj')
  export default {
    name: 'vue-seamless-scroll',
    data () {
      return {
        xPos: 0,
        yPos: 0,
        delay: 0,
        copyHtml: '',
        height: 0,
        width: 0, // 外容器宽度
        realBoxWidth: 0, // 内容实际宽度
      }
    },
    props: {
      data: {
        type: Array,
        default: () => {
          return []
        }
      },
      classOption: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      leftSwitchState () {
        return this.xPos < 0
      },
      rightSwitchState () {
        return Math.abs(this.xPos) < (this.realBoxWidth - this.width)
      },
      leftSwitchClass () {
        return this.leftSwitchState ? '' : this.options.switchDisabledClass
      },
      rightSwitchClass () {
        return this.rightSwitchState ? '' : this.options.switchDisabledClass
      },
      leftSwitch () {
        return {
          position: 'absolute',
          margin: `${this.height / 2}px 0 0 -${this.options.switchOffset}px`,
          transform: 'translate(-100%,-50%)'
        }
      },
      rightSwitch () {
        return {
          position: 'absolute',
          margin: `${this.height / 2}px 0 0 ${this.width + this.options.switchOffset}px`,
          transform: 'translateY(-50%)'
        }
      },
      float () {
        return this.isHorizontal ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' }
      },
      pos () {
        return {
          transform: `translate(${this.xPos}px,${this.yPos}px)`,
          transition: `all ${this.ease} ${this.delay}ms`,
          overflow: 'hidden'
        }
      },
      defaultOption () {
        return {
          step: 1, //步长
          limitMoveNum: 5, //启动无缝滚动最小数据数
          hoverStop: true, //是否启用鼠标hover控制
          direction: 1, // 0 往下 1 往上 2向左 3向右
          openTouch: true, //开启移动端touch
          singleHeight: 0, //单条数据高度有值hoverStop关闭
          singleWidth: 0, //单条数据宽度有值hoverStop关闭
          waitTime: 1000, //单步停止等待时间
          switchOffset: 30,
          autoPlay: true,
          navigation: false,
          switchSingleStep: 134,
          switchDelay: 400,
          switchDisabledClass: 'disabled',
          isSingleRemUnit: false // singleWidth/singleHeight 是否开启rem度量
        }
      },
      options () {
        return copyObj({}, this.defaultOption, this.classOption)
      },
      navigation () {
        return this.options.navigation
      },
      autoPlay () {
        if (this.navigation) return false
        return this.options.autoPlay
      },
      scrollSwitch () {
        return this.data.length >= this.options.limitMoveNum
      },
      hoverStopSwitch () {
        return this.options.hoverStop && this.autoPlay && this.scrollSwitch
      },
      canTouchScroll () {
        return this.options.openTouch
      },
      isHorizontal () {
        return this.options.direction > 1
      },
      baseFontSize () {
        return this.options.isSingleRemUnit ? parseInt(window.getComputedStyle(document.documentElement, null).fontSize) : 1
      },
      realSingleStopWidth () {
        return this.options.singleWidth * this.baseFontSize
      },
      realSingleStopHeight () {
        return this.options.singleHeight * this.baseFontSize
      },
      step () {
        let singleStep
        let step = this.options.step
        if (this.isHorizontal) {
          singleStep = this.realSingleStopWidth
        } else {
          singleStep = this.realSingleStopHeight
        }
        if (singleStep > 0 && singleStep % step > 0) {
          console.error('如果设置了单步滚动,step需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~')
        }
        return step
      }
    },
    methods: {
      reset () {
        this._cancle()
        this._initMove()
      },
      leftSwitchClick () {
        if (!this.leftSwitchState) return
        // 小于单步距离
        if (Math.abs(this.xPos) < this.options.switchSingleStep) {
          this.xPos = 0
          return
        }
        this.xPos += this.options.switchSingleStep
      },
      rightSwitchClick () {
        if (!this.rightSwitchState) return
        // 小于单步距离
        if ((this.realBoxWidth - this.width + this.xPos) < this.options.switchSingleStep) {
          this.xPos = this.width - this.realBoxWidth
          return
        }
        this.xPos -= this.options.switchSingleStep
      },
      _cancle () {
        cancelAnimationFrame(this.reqFrame || '')
      },
      touchStart (e) {
        if (!this.canTouchScroll) return
        let timer
        const touch = e.targetTouches[0] //touches数组对象获得屏幕上所有的touch，取第一个touch
        const { waitTime, singleHeight, singleWidth } = this.options
        this.startPos = {
          x: touch.pageX,
          y: touch.pageY
        } //取第一个touch的坐标值
        this.startPosY = this.yPos //记录touchStart时候的posY
        this.startPosX = this.xPos //记录touchStart时候的posX
        if (!!singleHeight && !!singleWidth) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            this._cancle()
          }, waitTime + 20)
        } else {
          this._cancle()
        }
      },
      touchMove (e) {
        //当屏幕有多个touch或者页面被缩放过，就不执行move操作
        if (!this.canTouchScroll || e.targetTouches.length > 1 || e.scale && e.scale !== 1) return
        const touch = e.targetTouches[0]
        const { direction } = this.options
        this.endPos = {
          x: touch.pageX - this.startPos.x,
          y: touch.pageY - this.startPos.y
        }
        event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
        const dir = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0 //dir，1表示纵向滑动，0为横向滑动
        if (dir === 1 && direction < 2) {  // 表示纵向滑动 && 运动方向为上下
          this.yPos = this.startPosY + this.endPos.y
        } else if (dir === 0 && direction > 1) { // 为横向滑动 && 运动方向为左右
          this.xPos = this.startPosX + this.endPos.x
        }
      },
      touchEnd () {
        if (!this.canTouchScroll) return
        let timer
        const direction = this.options.direction
        this.delay = 50
        if (direction === 1) {
          if (this.yPos > 0) this.yPos = 0
        } else if (direction === 0) {
          let h = this.realBoxHeight / 2 * -1
          if (this.yPos < h) this.yPos = h
        } else if (direction === 2) {
          if (this.xPos > 0) this.xPos = 0
        } else if (direction === 3) {
          let w = this.realBoxWidth * -1
          if (this.xPos < w) this.xPos = w
        }
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          this.delay = 0
          this._move()
        }, this.delay)
      },
      enter () {
        if (this.hoverStopSwitch) this._stopMove()
      },
      leave () {
        if (this.hoverStopSwitch) this._startMove()
      },
      _move () {
        // 鼠标移入时拦截_move()
        if (this.isHover) return
        this._cancle() //进入move立即先清除动画 防止频繁touchMove导致多动画同时进行
        this.reqFrame = requestAnimationFrame(
          function () {
            const h = this.realBoxHeight / 2  //实际高度
            const w = this.realBoxWidth / 2 //宽度
            let { direction, waitTime } = this.options
            let { step } = this
            if (direction === 1) { // 上
              if (Math.abs(this.yPos) >= h) {
                this.$emit('ScrollEnd')
                this.yPos = 0
              }
              this.yPos -= step
            } else if (direction === 0) { // 下
              if (this.yPos >= 0) {
                this.$emit('ScrollEnd')
                this.yPos = h * -1
              }
              this.yPos += step
            } else if (direction === 2) { // 左
              if (Math.abs(this.xPos) >= w) {
                this.$emit('ScrollEnd')
                this.xPos = 0
              }
              this.xPos -= step
            } else if (direction === 3) { // 右
              if (this.xPos >= 0) {
                this.$emit('ScrollEnd')
                this.xPos = w * -1
              }
              this.xPos += step
            }
            if (this.singleWaitTime) clearTimeout(this.singleWaitTime)
            if (!!this.realSingleStopHeight) { //是否启动了单行暂停配置
              if (Math.abs(this.yPos) % this.realSingleStopHeight < step) { // 符合条件暂停waitTime
                this.singleWaitTime = setTimeout(() => {
                  this._move()
                }, waitTime)
              } else {
                this._move()
              }
            } else if (!!this.realSingleStopWidth) {
              if (Math.abs(this.xPos) % this.realSingleStopWidth < step) { // 符合条件暂停waitTime
                this.singleWaitTime = setTimeout(() => {
                  this._move()
                }, waitTime)
              } else {
                this._move()
              }
            } else {
              this._move()
            }
          }.bind(this)
        )
      },
      _initMove () {
        this.$nextTick(() => {
          const { switchDelay } = this.options
          const { autoPlay, isHorizontal } = this
          this._dataWarm(this.data)
          this.copyHtml = '' //清空copy
          if (isHorizontal) {
            this.height = this.$refs.wrap.offsetHeight
            this.width = this.$refs.wrap.offsetWidth
            let slotListWidth = this.$refs.slotList.offsetWidth
            // 水平滚动设置warp width
            if (autoPlay) {
              // 修正offsetWidth四舍五入
              slotListWidth = slotListWidth * 2 + 1
            }
            this.$refs.realBox.style.width = slotListWidth + 'px'
            this.realBoxWidth = slotListWidth
          }

          if (autoPlay) {
            this.ease = 'ease-in'
            this.delay = 0
          } else {
            this.ease = 'linear'
            this.delay = switchDelay
            return
          }

          // 是否可以滚动判断
          if (this.scrollSwitch) {
            let timer
            if (timer) clearTimeout(timer)
            this.copyHtml = this.$refs.slotList.innerHTML
            setTimeout(() => {
              this.realBoxHeight = this.$refs.realBox.offsetHeight
              this._move()
            }, 0);
          } else {
            this._cancle()
            this.yPos = this.xPos = 0
          }
        })
      },
      _dataWarm (data) {
        if (data.length > 100) {
          console.warn(`数据达到了${data.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`);
        }
      },
      _startMove () {
        this.isHover = false //开启_move
        this._move()
      },
      _stopMove () {
        this.isHover = true //关闭_move
        // 防止频频hover进出单步滚动,导致定时器乱掉
        if (this.singleWaitTime) clearTimeout(this.singleWaitTime)
        this._cancle()
      },
    },
    mounted () {
      this._initMove()
    },
    watch: {
      data (newData, oldData) {
        this._dataWarm(newData)
        //监听data是否有变更
        if (!arrayEqual(newData, oldData)) {
          this.reset()
        }
      },
      autoPlay (bol) {
        if (bol) {
          this.reset()
        } else {
          this._stopMove()
        }
      }
    },
    beforeCreate () {
      this.reqFrame = null // move动画的animationFrame定时器
      this.singleWaitTime = null // single 单步滚动的定时器
      this.isHover = false // mouseenter mouseleave 控制this._move()的开关
      this.ease = 'ease-in'
    },
    beforeDestroy () {
      this._cancle()
      clearTimeout(this.singleWaitTime)
    }
  }
</script>
