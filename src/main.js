import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router';
import Comics from './components/desctop/comics/Comics.vue'
import Heroes from './components/desctop/heroes/Heroes.vue'
import Main from './components/desctop/main/Main.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

var router = new VueRouter({
  routes:[
    {path: '/', component: Main},
    {path: '/comics', component: Comics},
    {path: '/heroes', component: Heroes}
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
