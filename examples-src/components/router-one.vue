<template>
  <div class="router1">
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo1</b> 向上无缝滚动,hover可停止
        </p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step: 0.5,
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5
        <br />}
      </div>
      <my-class :data="listData" class="warp" :class-option="classOption" @ScrollEnd="end">
        <ul class="item">
          <a
            target="_blank"
            href="http://www.baidu.com"
            v-for="(item, index) in listData"
            :key="index"
          >
            <span class="title" v-text="item.title"></span>
            <span class="date" v-text="item.date"></span>
          </a>
        </ul>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo2</b> limitMoveNum过大不滚动 开启了openWatch
        </p>
        <p>3s后data增加到9条</p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 7
        <br />}
      </div>
      <my-class :data="listData1" :class-option="classOption1" class="warp">
        <ul class="item">
          <li v-for="(item, index) in listData1" :key="index">
            <span class="title" v-text="item.title"></span>
            <span class="date" v-text="item.date"></span>
          </li>
        </ul>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo3</b> limitMoveNum过大不滚动 关闭了openWatch
        </p>
        <p>3s后data增加到9条</p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 7
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;openWatch: false
        <br />}
      </div>
      <my-class :data="listData2" :class-option="classOption2" class="warp">
        <ul class="item">
          <li v-for="(item, index) in listData2" :key="index">
            <span class="title" v-text="item.title"></span>
            <span class="date" v-text="item.date"></span>
          </li>
        </ul>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo4</b>手动切换的demo
        </p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoPlay: false
        <br />}
      </div>
      <my-class :data="listData3" :class-option="classOption3" class="warp2 demo4">
        <span
          class="name"
          slot="left-switch"
          style="display: block;width: 30px;height: 40px;cursor: pointer;background-color:yellow;text-align: center;line-height:40px;"
        >&lt;</span>
        <ul class="ul-item clearfix">
          <li class="li-item" v-for="(item, index) in listData3" :key="index">{{item}}</li>
        </ul>
        <span
          class="name"
          slot="right-switch"
          style="display: block;width: 30px;height: 40px;cursor: pointer;background-color:yellow;text-align: center;line-height:40px;"
        >&gt;</span>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo5</b> 向右的无缝滚动
        </p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 2
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singleWidth: 134
        <br />}
      </div>
      <my-class :data="listData4" :class-option="classOption4" class="warp2">
        <ul class="ul-item ul-item2 clearfix" :style="{width: ulItem2Width + 'px'}">
          <li class="li-item" v-for="(item, index) in listData4" :key="index">{{item}}</li>
        </ul>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo6</b> 向左的无缝滚动 limitMoveNum过大不滚动
        </p>
        <p>3s后data增加到4条</p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 3
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singleWidth: 134
        <br />}
      </div>
      <my-class :data="listData5" :class-option="classOption5" class="warp2">
        <ul class="ul-item clearfix">
          <li class="li-item" v-for="(item, index) in listData5" :key="index">{{item}}</li>
        </ul>
      </my-class>
    </div>
    <div class="flex wd800">
      <my-class :data="listData" :class-option="{step:0.5}" class="seamless-warp test">
        <div>
          <div class="item">
            <div>
              <span class="mobile">144****75</span>
              <span class="content">获得588元理财金</span>
            </div>
            <div>
              <span class="mobile">155****23</span>
              <span class="content">获得588元理财金</span>
            </div>
          </div>
          <div class="item">
            <div>
              <span class="mobile">155****23</span>
              <span class="content">获得588元理财金</span>
            </div>
            <div>
              <span class="mobile">q****q</span>
              <span class="content">获得8元现金券</span>
            </div>
          </div>
          <div class="item">
            <div>
              <span class="mobile">3****m</span>
              <span class="content">获得1588元理财金</span>
            </div>
            <div>
              <span class="mobile">3****m</span>
              <span class="content">获得588元理财金</span>
            </div>
          </div>
          <div class="item">
            <div>
              <span class="mobile">3****m</span>
              <span class="content">获得58元现金券</span>
            </div>
            <div>
              <span class="mobile">3****m</span>
              <span class="content">获得588元理财金</span>
            </div>
          </div>
          <div class="item">
            <div>
              <span class="mobile">3****m</span>
              <span class="content">获得588元理财金</span>
            </div>
            <div>
              <span class="mobile">144****75</span>
              <span class="content">获得8元现金券</span>
            </div>
          </div>
          <div class="item">
            <div>
              <span class="mobile">144****75</span>
              <span class="content">获得8元现金券</span>
            </div>
            <div>
              <span class="mobile">144****75</span>
              <span class="content">获得8元现金券</span>
            </div>
          </div>
          <div class="item">
            <div>
              <span class="mobile">144****75</span>
              <span class="content">获得588元理财金</span>
            </div>
            <div>
              <span class="mobile">144****75</span>
              <span class="content">获得588元理财金</span>
            </div>
          </div>
        </div>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo7</b> 向右的无缝滚动, ul的width非整数,offsetWidth计算四舍五入，丢失小数，导致宽度计算错误。
        </p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 4
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3
        <br />}
      </div>
      <my-class :data="listData7" :class-option="classOption7" class="warp2">
        <ul class="ul-item decimal clearfix">
          <li class="li-item" v-for="(item, index) in listData7" :key="index">{{item}}</li>
        </ul>
      </my-class>
    </div>
    <div class="flex wd800">
      <div class="options" style="color:#357edd;">
        <p>
          <b>demo8</b> 向右的无缝滚动, li宽度不定无法设置ul的width, 把ul的display设置为flex即可。
        </p>var option = {
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 4
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3
        <br />}
      </div>
      <my-class :data="listData8" :class-option="classOption7" class="warp2 random">
        <ul class="ul-item random clearfix">
          <li class="li-item" v-for="(item, index) in listData8" :key="index">{{item}}</li>
        </ul>
      </my-class>
    </div>
  </div>
</template>


<script>
  import myClass from 'src/components/myClass.vue'

  export default {
    data () {
      return {
        listData3: [1, 2, 3, 4, 5, 6],
        listData7: [1, 2, 3, 4, 5],
        listData4: [1, 2, 3],
        listData5: [1, 2],
        listData8: [],
        listData: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第七行无缝滚动第七行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第八行无缝滚动第八行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第九行无缝滚动第九行',
          'date': '2017-12-16'
        },],
        listData1: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }],
        listData2: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }],
        ulItem2Width: 0,
        classOption: {
          autoPlay: false,
          step: 0.5,
          limitMoveNum: 5,
        },
      }
    },
    props: {},
    computed: {
      classOption1 () {
        return {
          limitMoveNum: 7
        }
      },
      classOption2 () {
        return {
          limitMoveNum: 7
        }
      },
      classOption3 () {
        return {
          direction: 2,
          navigation: true
        }
      },
      classOption4 () {
        return {
          limitMoveNum: 2,
          direction: 3,
          singleWidth: 134
        }
      },
      classOption5 () {
        return {
          limitMoveNum: 4,
          direction: 2
        }
      },
      classOption7 () {
        return {
          limitMoveNum: 4,
          direction: 3
        }
      },
    },
    components: {
      myClass
    },
    methods: {
      end () {
        console.log('ScrollEnd')
      }
    },
    created () {
      setTimeout(() => {
        this.listData5 = [1, 2, 3, 4, 5]
        this.listData4 = [1, 2, 3, 4, 5]
        this.listData8 = [1, 2, 3, 4, 5, 6]
        this.ulItem2Width = 670
        this.listData3 = [1, 2, 3, 4, 5, 6, 7]
      }, 1500)
      setTimeout(() => {
        this.listData1 = this.listData2 = [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第七行无缝滚动第七行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第八行无缝滚动第八行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第九行无缝滚动第九行',
          'date': '2017-12-16'
        }]
      }, 2000)
      setTimeout(() => {
        this.classOption.autoPlay = true
      }, 3400);
      setTimeout(() => {
        this.classOption.autoPlay = false
      }, 7400);
    }
  }
</script>

<style lang="scss" scoped>
  .demo4 {
    width: 402px !important;
    .ul-item {
      width: 804px;
    }
  }
  .ul-item {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 670px;
    &.random {
      display: flex;
      width: auto;
    }
    &.decimal {
      width: 670.4px;
    }
    &.ul-item2 {
      width: 0;
    }
    .li-item {
      float: left;
      width: 124px;
      height: 124px;
      margin: 10px 0 10px 10px;
      line-height: 124px;
      background-color: lightgray;
      font-family: "Amaranth", sans-serif;
      font-size: 82px;
      text-align: center;
    }
  }

  .warp2 {
    width: 400px;
    height: 150px;
    overflow: hidden;
  }

  .test {
    height: 126px;
    width: 600px;
    overflow: hidden;
    font-size: 14px;
  }

  .test .item {
    display: flex;
    margin-top: 10px;
    div {
      flex: 1;
    }
    a {
      display: block;
    }
  }
</style>