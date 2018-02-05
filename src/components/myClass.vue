<template>
    <div ref="wrap">
        <div :style="leftSwitch" :class="leftSwitchClass" @click="leftSwitchClick">
            <slot name="left-switch"></slot>
        </div>
        <div :style="rightSwitch" :class="rightSwitchClass" @click="rightSwitchClick">
            <slot name="right-switch"></slot>
        </div>
        <div ref="realBox" :style="pos" @mouseenter="enter" @mouseleave="leave" @touchstart="touchStart"
             @touchmove="touchMove" @touchend="touchEnd">
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
        reqFrame: null, // move动画的animationFrame定时器
        singleWaitTime: null, // single 单步滚动的定时器
        isHover: false // mouseenter mouseleave 控制this._move()的开关
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
        return this.options.direction > 1 || !this.options.autoPlay ? {float: 'left', overflow: 'hidden'} : {overflow: 'hidden'}
      },
      pos () {
        return {
          transform: `translate(${this.xPos}px,${this.yPos}px)`,
          transition: `all ${this.ease || 'ease-in'} ${this.delay}ms`,
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
          switchSingleStep: 134,
          switchDelay: 400,
          switchDisabledClass: 'disabled'
        }
      },
      options () {
        return copyObj({}, this.defaultOption, this.classOption)
      },
      moveSwitch () {
        return this.data.length < this.options.limitMoveNum
      },
      hoverStop () {
        return !this.options.autoPlay || !this.options.hoverStop || this.moveSwitch
      },
      canTouch () {
        return !this.options.openTouch || !this.options.autoPlay
      }
    },
    methods: {
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
        if (this.canTouch) return
        let timer
        let touch = e.targetTouches[0] //touches数组对象获得屏幕上所有的touch，取第一个touch
        this.startPos = {
          x: touch.pageX,
          y: touch.pageY
        } //取第一个touch的坐标值
        this.startPosY = this.yPos //记录touchStart时候的posY
        this.startPosX = this.xPos //记录touchStart时候的posX
        if (!!this.options.singleHeight && !!this.options.singleWidth) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            this._cancle()
          }, this.options.waitTime + 20)
        } else {
          this._cancle()
        }
      },
      touchMove (e) {
        //当屏幕有多个touch或者页面被缩放过，就不执行move操作
        if (this.canTouch || e.targetTouches.length > 1 || e.scale && e.scale !== 1) return
        let touch = e.targetTouches[0]
        this.endPos = {
          x: touch.pageX - this.startPos.x,
          y: touch.pageY - this.startPos.y
        }
        event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
        let dir = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0 //dir，1表示纵向滑动，0为横向滑动
        if (dir === 1 && this.options.direction < 2) {  // 表示纵向滑动 && 运动方向为上下
          this.yPos = this.startPosY + this.endPos.y
        } else if (dir === 0 && this.options.direction > 1) { // 为横向滑动 && 运动方向为左右
          this.xPos = this.startPosX + this.endPos.x
        }
      },
      touchEnd () {
        if (this.canTouch) return
        let timer
        let direction = this.options.direction
        this.delay = 50
        if (direction === 1) {
          if (this.yPos > 0) this.yPos = 0
        } else if (direction === 0) {
          let h = this.$refs.realBox.offsetHeight / 2 * -1
          if (this.yPos < h) this.yPos = h
        } else if (direction === 2) {
          if (this.xPos > 0) this.xPos = 0
        } else if (direction === 3) {
          let w = this.$refs.slotList.offsetWidth * -1
          if (this.xPos < w) this.xPos = w
        }
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          this.delay = 0
          this._move()
        }, this.delay)
      },
      enter () {
        if (this.hoverStop) return
        this.isHover = true //关闭_move
        // 防止蛋疼的人频频hover进出单步滚动 导致定时器乱掉
        if (this.singleWaitTime) clearTimeout(this.singleWaitTime)
        this._cancle()
      },
      leave () {
        if (this.hoverStop) return
        this.isHover = false //开启_move
        this._move()
      },
      _move () {
        // 鼠标移入时拦截_move()
        if (this.isHover) return
        this._cancle() //进入move立即先清除动画 防止频繁touchMove导致多动画同时进行
        this.reqFrame = requestAnimationFrame(
          function () {
            if (!this.$refs.realBox) return //fixed 路由之间切换报this.$refs.realBox.offsetHeigh undefined bug
            let h = this.$refs.realBox.offsetHeight / 2  //实际高度
            let w = this.$refs.slotList.offsetWidth //宽度
            let direction = this.options.direction //滚动方向
            if (direction === 1) { // 上
              if (Math.abs(this.yPos) >= h) this.yPos = 0
              this.yPos -= this.options.step
            } else if (direction === 0) { // 下
              if (this.yPos >= 0) this.yPos = h * -1
              this.yPos += this.options.step
            } else if (direction === 2) { // 左
              if (Math.abs(this.xPos) >= w) this.xPos = 0
              this.xPos -= this.options.step
            } else if (direction === 3) { // 右
              if (this.xPos >= 0) this.xPos = w * -1
              this.xPos += this.options.step
            }
            if (this.singleWaitTime) clearTimeout(this.singleWaitTime)
            if (!!this.options.singleHeight) { //是否启动了单行暂停配置
              if (Math.abs(this.yPos) % this.options.singleHeight === 0) { // 符合条件暂停waitTime
                this.singleWaitTime = setTimeout(() => {
                  this._move()
                }, this.options.waitTime)
              } else {
                this._move()
              }
            } else if (!!this.options.singleWidth) {
              if (Math.abs(this.xPos) % this.options.singleWidth === 0) { // 符合条件暂停waitTime
                this.singleWaitTime = setTimeout(() => {
                  this._move()
                }, this.options.waitTime)
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
        this.copyHtml = '' //清空copy
        if (this.moveSwitch) {
          this._cancle()
          this.yPos = this.xPos = 0
        } else {
          let timer
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => { //20ms延迟 作用保证能取到最新的html
            this.copyHtml = this.$refs.slotList.innerHTML
          }, 20)
          this._move()
        }
      }
    },
    mounted () {
      this.height = this.$refs.wrap.offsetHeight
      this.width = this.$refs.wrap.offsetWidth
      // 设置warp width
      if (this.options.direction > 1 || !this.options.autoPlay) {
        let rate
        if (!this.options.autoPlay) {
          rate = 1
        } else {
          rate = 2
        }
        this.$refs.realBox.style.width = this.$refs.slotList.offsetWidth * rate + 'px'
        this.realBoxWidth = this.$refs.slotList.offsetWidth * rate
      }
      if (!this.options.autoPlay) {
        this.ease = 'linear'
        this.delay = this.options.switchDelay
        return
      }
      this._initMove()
    },
    watch: {
      data (newData, oldData) {
        //监听data是否有变更
        if (!arrayEqual(newData, oldData)) {
          this._cancle()
          this._initMove()
        }
      }
    },
    beforeDestroy () {
      this._cancle()
    }
  }
</script>
