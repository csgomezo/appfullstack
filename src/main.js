import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/js/bootstrap"
import Home from './components/Home.vue'
import SingIn from './components/SingIn.vue'

Vue.config.productionTip = false

Vue.use(Router)
const routes=[
  {path:'/Home',component:Home},
  {path:'/',component:Home},
  {path:'/Singin',component:SingIn},

]

const router=new Router({
  routes,
  mode:'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
