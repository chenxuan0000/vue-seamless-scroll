<template>
    <div id="app">
        <div class="fixed top-0 w-100 z-1 flex-none flex flex-row items-center pv3 ph4 bg-blue white">
            <div class="flex-fill"><a href="https://github.com/chenxuan0000/vue-seamless-scroll"
                                      class="white no-underline underline-hover">vue-seamless-scroll</a></div>
            <div class="flex-none"><a href="https://github.com/chenxuan0000/vue-seamless-scroll" rel="noopener"
                                      target="_blank" title="View on Github">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 16 16">
                    <path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"></path>
                </svg>
            </a>
            </div>
        </div>
        <p class="pt5 f2" style="text-align: center;">无缝滚动demo</p>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo1</b> 向上无缝滚动,hover可停止</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step: 0.5,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5<br/>
                }
            </div>
            <my-class :data="listData" :classOption="classOption" @copyData="listData = listData.concat(listData)"
                      class="warp">
                <ul class="item">
                    <li v-for="item in listData"><span class="title">{{item.title}}</span><span class="date">{{item.date}}</span>
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
            <my-class :data="listData1" :classOption="classOption1" @copyData="listData1 = listData1.concat(listData1)"
                      class="warp">
                <ul class="item">
                    <li v-for="item in listData1"><span class="title">{{item.title}}</span><span
                            class="date">{{item.date}}</span></li>
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
            <my-class :data="listData2" :classOption="classOption2" @copyData="listData2 = listData2.concat(listData2)"
                      class="warp">
                <ul class="item">
                    <li v-for="item in listData2"><span class="title">{{item.title}}</span><span
                            class="date">{{item.date}}</span></li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo4</b> 向下滚动,禁止了hover悬停</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 0,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hoverStop: false,<br/>
                }
            </div>
            <my-class :data="listData3" :classOption="classOption3" @copyData="listData3 = listData3.concat(listData3)"
                      class="warp">
                <ul class="item">
                    <li v-for="item in listData3"><span class="title">{{item.title}}</span><span
                            class="date">{{item.date}}</span></li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo1</b> 向上无缝滚动,单条停止一段时间</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step: 0.5,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5<br/>
                }
            </div>
            <my-class :data="listData4" :classOption="classOption4" @copyData="listData4 = listData4.concat(listData4)"
                      class="warp">
                <ul class="item">
                    <li v-for="item in listData4"><span class="title">{{item.title}}</span><span class="date">{{item.date}}</span>
                    </li>
                </ul>
            </my-class>
        </div>
    </div>
</template>

<script>
  import myClass from '../src/components/myClass.vue'

  export default {
    name: 'app',
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
        }],
        listData3: [{
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
        }],
        listData4: [{
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
      }
    },
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
          limitMoveNum: 5,
          direction: 0,
          hoverStop: false
        }
      },
      classOption4 () {
        return {
          step: 0.5,
          limitMoveNum: 5,
          singleHeight: 30,
          waitTime: 1000
        }
      }
    },
    components: {
      myClass
    },
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

<style lang="scss">
    #app {
        padding-bottom: 100px;
    }

    .flex-fill {
        -ms-flex: 1 1;
        flex: 1 1;
    }

    .options {
        width: 300px;
        margin-right: 60px;
        p {
            color: #000;
            font-size: 14px;
            margin-bottom: 30px;
            b {
                font-size: 16px;
                font-style: italic;
            }
        }
    }

    .wd800 {
        width: 800px;
        margin: 30px auto;
    }

    .warp {
        height: 260px;
        width: 360px;
        overflow: hidden;
        ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            li {
                height: 30px;
                line-height: 30px;
                display: flex;
                justify-content: space-between;
                font-size: 15px;
            }
        }
    }
</style>
