<template>
  <vue-seamless-scroll :data="listData" class="warp" ref="seamlessScroll">
    <ul class="item">
      <li v-for="(item, index) in listData" :key="index">
        <span class="title" v-text="item.title"></span>
        <span class="date" v-text="item.date"></span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'

  export default {
    name: 'Example11Basic',
    components: {
      vueSeamlessScroll
    },
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
        }],
      }
    },
    mounted () {
      setTimeout(() => {
        this.listData = [
          ...this.listData,
          {
            'title': '无缝滚动第⑥行无缝滚动第五行',
            'date': '2017-12-16'
          },
          {
            'title': '无缝滚动第⑦行无缝滚动第五行',
            'date': '2017-12-16'
          },
          {
            'title': '无缝滚动第⑧行无缝滚动第五行',
            'date': '2017-12-16'
          },
          {
            'title': '无缝滚动第⑨行无缝滚动第五行',
            'date': '2017-12-16'
          }
        ]
      }, 1000);
    },
  }
</script>

<style lang="scss" scoped>
  .warp {
    height: 270px;
    width: 360px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      li,
      a {
        display: block;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 15px;
      }
    }
  }
</style>
