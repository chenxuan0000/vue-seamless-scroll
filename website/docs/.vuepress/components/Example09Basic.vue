<template>
  <vue-seamless-scroll
    :data="listData"
    :class-option="classOption"
    class="warp"
  >
    <ul class="ul-item">
      <li class="li-item" v-for="(item, index) in listData" :key="index"></li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import echarts from 'echarts'

  export default {
    name: 'Example09Basic',
    components: {
      vueSeamlessScroll
    },
    data () {
      return {
        listData: [1, 2, 3, 4, 5, 6],
        classOption: {
          limitMoveNum: 2,
          direction: 3,
        }
      }
    },
    methods: {
      drawChart (dom) {
        const myChart = echarts.init(dom)
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ]
            }
          ]
        });
      }
    },
    mounted () {
      // echart渲染放到setTimeout宏任务,这时vue-seamless-scroll组件内部复制完成
      setTimeout(() => {
        document.querySelectorAll('.li-item').forEach(dom => {
          this.drawChart(dom);
        });
      }, 0);
    },
  }
</script>

<style lang="scss" scoped>
  .warp {
    width: 240px * 3;
    height: 210px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      &.ul-item {
        display: flex;
        .li-item {
          width: 240px;
          height: 200px;
          margin-right: 10px;
          border: 1px solid #000;
        }
      }
    }
  }
</style>
