<template>
    <div id="app">
        <div class="fixed top-0 w-100 z-1 flex-none flex flex-row items-center pv3 ph4 bg-blue white">
            <div class="flex-none"><a href="https://github.com/chenxuan0000/vue-seamless-scroll" rel="noopener"
                                      target="_blank" title="View on Github">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 16 16">
                    <path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"></path>
                </svg>
            </a>
            </div>
            <div class="flex-none" style="margin-left: 10px;"><a
                    href="https://github.com/chenxuan0000/vue-seamless-scroll"
                    class="white no-underline underline-hover">vue-seamless-scroll</a></div>
        </div>
        <p class="pt5 f2" style="text-align: center;">无缝滚动demo</p>
        <div style="text-align:center;">
            <router-link to="/routerOne" tag="a">前往routerOne路由</router-link>
            <router-link to="/routerTwo" tag="a" style="padding-left: 20px;">前往routerTwo路由</router-link>
        </div>
        <keep-alive>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {},
    components: {}
  }
</script>

<style lang="scss">
    #app {
        padding-bottom: 100px;
    }
    .fade-enter {
        opacity:0;
        transform: translateX(100%);
        &-active {
            transition: all 0.2s;
        }
    }
    .fade-leave {
        opacity:1;
        transform: translateX(0);
        &-active {
            opacity: 0;
            transform: translateX(-100%);
            transition: all 0.2s;
        }
    }

    .flex-fill {
        -ms-flex: 1 1;
        flex: 1 1;
    }

    .options {
        width: 300px;
        font-size: 15px;
        margin-right: 60px;
        p {
            color: #000;
            margin-bottom: 30px;
            b {
                font-size: 16px;
                font-style: italic;
            }
        }
    }

    .clearfix {
        zoom: 1;
        &:after {
            display: block;
            height: 0;
            clear: both;
            content: '.';
            visibillity: hidden;
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

    @media screen and (max-width: 770px) {
        .warp {
            width: 90%;
            margin: 0 auto;
        }
        body {
            background-color: lightblue;
        }
        .wd800 {
            width: 100%;
        }
        .flex.wd800 {
            display: block;
        }
        .options {
            width: 90%;
            margin: 20px auto;
            p {
                margin-bottom: 0;
            }
        }
    }
</style>
