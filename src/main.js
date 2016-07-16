import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routers'
import { fixed } from './filters'

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()
configRouter(router)
Vue.filter('fixed', fixed)

router.start(App, 'app')
