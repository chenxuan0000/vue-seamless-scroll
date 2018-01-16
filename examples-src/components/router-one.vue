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
    </div>
</template>
<style lang="scss" scoped>
</style>
<script>
  import myClass from 'src/components/myClass.vue'

  export default {
    data () {
      return {
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
      }
    },
    components: {
      myClass
    },
    methods: {},
    created () {
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