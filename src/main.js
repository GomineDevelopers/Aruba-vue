import Vue from 'vue'
import qs from 'qs'
import router from './router'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import vueHeadful from 'vue-headful'
import VeHistogram from 'v-charts/lib/histogram.common'

import { commonTools } from '@/utils/common'
import '@/styles/font/iconfont'
import '@/styles/font_weather/iconfont'
import '@/styles/common.css'

import App from './App.vue'
import store from './store'
import axios from 'axios'  // @待优化：将各个脚本中的axios分离出来，删掉这里的axios 相关 

Vue.use(Vant)
Vue.prototype.$commonTools = commonTools
Vue.use(Lazyload)
Vue.component('vue-headful', vueHeadful)
Vue.component(VeHistogram.name, VeHistogram)

Vue.config.productionTip = false
Vue.prototype.$http = axios  // 将各个脚本中的axios分离出来，删掉这里的axios 相关 
Vue.prototype.$qs = qs // @待优化：qs相关内容单独提出，删掉这里

import $ from 'jquery'
Vue.prototype.$jquery = $

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

import { wxOauth } from '@/api'


// commonTools.setCookie('CMyCount', 1, 60)

router.beforeEach((to, from, next) => {
  next()
}) // router.beforeEach
/* eslint-disable no-new */
new Vue({
  router,
  store,
  commonTools,
  render: h => h(App)
}).$mount('#app')