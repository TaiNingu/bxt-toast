import bxtToast from './bxt-toast.vue'

//组件注册
if(typeof window != 'undefined' && window.Vue){
  window.Vue.component('bxtToast', bxtToast)
}

//提供vue.use使用方法

bxtToast.install = function(Vue){
  Vue.component(bxtToast.name,bxtToast)
}

export default bxtToast