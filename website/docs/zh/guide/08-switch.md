# 08 - switch控制切换

<ClientOnly>
<Example08Basic></Example08Basic>
</ClientOnly>

```vue
<template>
  <vue-seamless-scroll
    :data="listData"
    :class-option="classOption"
    class="warp"
  >
    <ul class="ul-item">
      <li class="li-item" v-for="(item, index) in listData" :key="index">
        {{ item }}
      </li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'

  export default {
    name: 'Example03Basic',
    components: {
      vueSeamlessScroll
    },
    data () {
      return {
        listData: [1, 2, 3, 4, 5, 6],
        classOption: {
          limitMoveNum: 2,
          switchSingleStep: 140,
          direction: 3,
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .warp {
    width: 130px * 4 - 10;
    height: 120px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      &.ul-item {
        display: flex;
        .li-item {
          width: 120px;
          height: 120px;
          margin-right: 10px;
          line-height: 120px;
          background-color: #999;
          color: #fff;
          text-align: center;
          font-size: 30px;
        }
      }
    }
  }
</style>

```

