import vueMyCLass from './components/myClass.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-seamless-scroll', vueMyCLass)
}

export { vueMyCLass }

export default vueMyCLass
