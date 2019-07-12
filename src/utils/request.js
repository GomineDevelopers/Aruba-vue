import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'; //vant提示功能
Vue.use(Toast);

// 创建axios实例
const service = axios.create({
    timeout: 15000 // 请求超时时间
})

export default service