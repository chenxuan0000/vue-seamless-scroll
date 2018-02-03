<template>
    <div class="router2">
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo4</b> 向下滚动,禁止了hover悬停</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 0,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hoverStop: false,<br/>
                }
            </div>
            <my-class :data="listData3" :class-option="classOption3" class="warp">
                <ul class="item">
                    <li v-for="item in listData3"><span class="title" v-text="item.title"></span><span
                            class="date" v-text="item.date"></span></li>
                </ul>
            </my-class>
        </div>
        <div class="flex wd800">
            <div class="options" style="color:#357edd;">
                <p><b>demo5</b> 向上无缝滚动,单条停止一段时间</p>
                var option = {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step: 1,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limitMoveNum: 5<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singleHeight: 30,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;waitTime: 1000<br/>
                }
            </div>
            <my-class :data="listData4" :class-option="classOption4" class="warp">
                <ul class="item">
                    <li v-for="item in listData4"><span class="title" v-text="item.title"></span><span class="date"
                                                                                                       v-text="item.date"></span>
                    </li>
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
      classOption3 () {
        return {
          limitMoveNum: 5,
          direction: 0,
          hoverStop: false
        }
      },
      classOption4 () {
        return {
          step: 1,
          limitMoveNum: 5,
          singleHeight: 30,
          waitTime: 1000
        }
      }
    },
    components: {
      myClass
    }
  }
</script>