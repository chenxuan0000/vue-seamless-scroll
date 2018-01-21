import vueMyCLass from './components/myClass.vue'

let myScroll

const defaultComponentName = 'vue-seamless-scroll'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-seamless-scroll', vueMyCLass)
} else {
  myScroll = {
    install: function (Vue, options = {}) {
      Vue.component(options.componentName || defaultComponentName, vueMyCLass)
    }
  }

}

export default myScroll
