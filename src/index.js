import vueMyCLass from './components/myClass.vue'

vueMyCLass.install = function (Vue, options = {}) {
  Vue.component(options.componentName || vueMyCLass.name, vueMyCLass)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(vueMyCLass.name, vueMyCLass)
}

export default vueMyCLass
