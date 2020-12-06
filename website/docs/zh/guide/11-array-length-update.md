# 11 - 滚动列表动态追加数据

<ClientOnly>
<Example11Basic></Example11Basic>
</ClientOnly>

```vue
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
    name: 'Example10Basic',
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
    mounted() {
      setTimeout(() => {
        this.listData[0] = {
          title: '我的第一条的title，我被更新了。',
          date: 'date1'
        }
        this.listData[1] = {
          title: '我的第二条的title，我被更新了。',
          date: 'date2'
        }
        this.listData[2] = {
          title: '我的第三条的title，我被更新了。',
          date: 'date3'
        }
        this.listData[3] = {
          title: '我的第四条的title，我被更新了。',
          date: 'date4'
        }
        this.listData.push()
        // listData length无变化，仅仅是属性变更，手动调用下组件内部的reset方法
        this.$refs.seamlessScroll.reset()
      }, 2000);
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

```

