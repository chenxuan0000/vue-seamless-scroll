<template>
  <vue-seamless-scroll
    :data="listData"
    :class-option="classOption"
    class="warp"
  >
    <span slot="left-switch" class="left-arrow"></span>
    <span slot="right-switch" class="right-arrow"></span>
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
    name: 'Example08Basic',
    components: {
      vueSeamlessScroll
    },
    data () {
      return {
        listData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        classOption: {
          navigation: true,
          switchSingleStep: 140,
          direction: 2,
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
    .disabled {
      .left-arrow,
      .right-arrow {
        background-color: #ccc;
        cursor: not-allowed;
        &:hover {
          background-color: #ccc;
        }
      }
    }
    .left-arrow,
    .right-arrow {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #00a0e9;
      cursor: pointer;
      &:hover {
        background-color: #0f39fa;
      }
      &::before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        top: 12px;
        left: 15px;
        border: 2px solid #fff;
      }
    }
    .left-arrow::before {
      border-right: 0;
      border-bottom: 0;
      transform: rotate(-45deg);
    }
    .right-arrow::before {
      border-left: 0;
      border-top: 0;
      left: 9px;
      transform: rotate(-45deg);
    }
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
