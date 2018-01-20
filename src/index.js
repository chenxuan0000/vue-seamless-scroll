import vueMyCLass from './components/myClass.vue'

let myScroll

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-seamless-scroll', vueMyCLass)
} else {
  myScroll = {
    install: function (Vue) {
      Vue.component('vue-seamless-scroll', vueMyCLass)
    }
  }

}

export default myScroll
