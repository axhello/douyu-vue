import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routers'
import { fixed } from './filters'
require('vue-swipe/dist/vue-swipe.css')

Vue.filter('fixed', fixed)

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()
configRouter(router)

router.start(App, '#app')
