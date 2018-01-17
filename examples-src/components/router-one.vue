<template>
    <div class="router1">
        <div style="text-align:center;">
            <router-link to="/routerTwo" tag="a">前往routerTwo路由</router-link>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo1</b> 向上无缝滚动,hover可停止</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step: 0.5,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5<br/>
                }
            </div>
            <my-class :data="listData" :class-option="classOption" class="warp">
                <ul class="item">
                    <li v-for="item in listData"><span class="title" v-text="item.title"></span><span class="date"
                                                                                                      v-text="item.date"></span>
                    </li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo2</b> limitMoveNum过大不滚动 开启了openWatch</p>
                <p>3s后data增加到9条</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 7<br/>
                }
            </div>
            <my-class :data="listData1" :class-option="classOption1" class="warp">
                <ul class="item">
                    <li v-for="item in listData1"><span class="title" v-text="item.title"></span><span
                            class="date" v-text="item.date"></span></li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo3</b> limitMoveNum过大不滚动 关闭了openWatch</p>
                <p>3s后data增加到9条</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 7<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;openWatch: false<br/>
                }
            </div>
            <my-class :data="listData2" :class-option="classOption2" class="warp">
                <ul class="item">
                    <li v-for="item in listData2"><span class="title" v-text="item.title"></span><span
                            class="date" v-text="item.date"></span></li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo4</b>向左的无缝滚动</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 2<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 2<br/>
                }
            </div>
            <my-class :data="listData3" :class-option="classOption3" class="warp2">
                <ul class="ul-item clearfix">
                    <li class="li-item" v-for="item in listData3">{{item}}</li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo5</b> 向右的无缝滚动</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 2<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singleWidth: 134<br/>
                }
            </div>
            <my-class :data="listData4" :class-option="classOption4" class="warp2">
                <ul class="ul-item clearfix">
                    <li class="li-item" v-for="item in listData4">{{item}}</li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo6</b> 向左的无缝滚动 limitMoveNum过大不滚动</p>
                <p>3s后data增加到4条</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 3<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 3<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singleWidth: 134<br/>
                }
            </div>
            <my-class :data="listData5" :class-option="classOption5" class="warp2">
                <ul class="ul-item clearfix">
                    <li class="li-item" v-for="item in listData5">{{item}}</li>
                </ul>
            </my-class>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .ul-item {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 670px;
        .li-item {
            float: left;
            width: 124px;
            height: 124px;
            margin: 10px 0 10px 10px;
            line-height: 124px;
            background-color: lightgray;
            font-family: 'Amaranth', sans-serif;
            font-size: 82px;
            text-align: center;
        }
    }

    .warp2 {
        width: 400px;
        height: 150px;
        overflow: hidden;
    }
</style>
<script>
  import myClass from 'src/components/myClass.vue'

  export default {
    data () {
      return {
        listData3: [1, 2, 3, 4, 5],
        listData4: [1, 2, 3, 4, 5],
        listData5: [1, 2],
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
        }],
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
        }]
      }
    },
    props: {},
    computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 5
        }
      },
      classOption1 () {
        return {
          limitMoveNum: 7
        }
      },
      classOption2 () {
        return {
          limitMoveNum: 7,
          openWatch: false
        }
      },
      classOption3 () {
        return {
          limitMoveNum: 2,
          direction: 2
        }
      },
      classOption4 () {
        return {
          limitMoveNum: 2,
          direction: 3,
          singleWidth: 138
        }
      },
      classOption5 () {
        return {
          limitMoveNum: 4,
          direction: 2
        }
      },
    },
    components: {
      myClass
    },
    methods: {},
    created () {
      setTimeout(() => {
        this.listData5 = [1, 2, 3, 4, 5]
      },3000)
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
      }, 3000)
    }
  }
</script>