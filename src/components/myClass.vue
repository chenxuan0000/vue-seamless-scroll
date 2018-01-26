<template>
    <div @mouseenter="enter" @mouseleave="leave" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <div ref="wrap" :style="pos">
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
  export default {
    data () {
      return {
        xPos: 0,
        yPos: 0,
        delay: 0,
        copyHtml: '',
        reqFrame: null
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
      float () {
        return this.options.direction > 1 ? {float: 'left',overflow:'hidden'} : {overflow:'hidden'}
      },
      pos () {
        return {
          transform: `translate(${this.xPos}px,${this.yPos}px)`,
          transition: `all ease-in ${this.delay}ms`,
          overflow:'hidden'
        }
      },
      defaultOption () {
        return {
          step: 1, //步长
          limitMoveNum: 5, //启动无缝滚动最小数据数
          hoverStop: true, //是否启用鼠标hover控制
          direction: 1, // 0 往下 1 往上 2向左 3向右
          openWatch: true, //开启data实时监听
          singleHeight: 0, //单条数据高度有值hoverStop关闭
          singleWidth: 0, //单条数据宽度有值hoverStop关闭
          waitTime: 1000 //单步停止等待时间
        }
      },
      options () {
        return Object.assign({}, this.defaultOption, this.classOption)
      },
      moveSwitch () {
        return this.data.length < this.options.limitMoveNum
      },
      hoverStop () {
        return !this.options.openWatch || !!this.options.singleHeight || !!this.options.singleWidth || !this.options.hoverStop || this.moveSwitch
      }
    },
    methods: {
      _cancle () {
        cancelAnimationFrame(this.reqFrame || '')
      },
      touchStart (e) {
        if (!this.options.openWatch) return
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
        if (!this.options.openWatch || e.targetTouches.length > 1 || e.scale && e.scale !== 1) return
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
        if (!this.options.openWatch) return
        let timer
        let direction = this.options.direction
        this.delay = 50
        if (direction === 1) {
          if (this.yPos > 0) this.yPos = 0
        } else if (direction === 0) {
          let h = this.$refs.wrap.offsetHeight / 2 * -1
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
        this._cancle()
      },
      leave () {
        if (this.hoverStop) return
        this._move()
      },
      _move () {
        this._cancle() //进入move立即先清除动画 防止频繁touchMove导致多动画同时进行
        this.reqFrame = requestAnimationFrame(
          function () {
            if(!this.$refs.wrap) return //fixed 路由之间切换报this.$refs.wrap.offsetHeigh undefined bug
            let h = this.$refs.wrap.offsetHeight / 2  //实际高度
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
            let timer
            if (!!this.options.singleHeight) { //是否启动了单行暂停配置
              if (Math.abs(this.yPos) % this.options.singleHeight === 0) { // 符合条件暂停waitTime
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                  this._move()
                }, this.options.waitTime)
              } else {
                this._move()
              }
            } else if (!!this.options.singleWidth) {
              if (Math.abs(this.xPos) % this.options.singleWidth === 0) { // 符合条件暂停waitTime
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
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
      this._initMove()
      // 设置warp width
      if (this.options.direction > 1) {
        this.$refs.wrap.style.width = this.$refs.slotList.offsetWidth * 2 + 'px'
      }
    },
    watch: {
      data (newData, oldData) {
        //监听data是否有变更
        if (!this.options.openWatch) return
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
