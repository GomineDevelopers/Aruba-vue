import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "/customers/aruba/dist/",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('./components/HelloWorld'),
      meta: {
        title: '测试页面',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/meeting',
      name: 'Meeting',
      component: () => import(/* webpackChunkName: "Meeting" */ '@/views/meeting/Meeting'),
      meta: {
        title: '会议日程',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/personalcenter',
      name: 'PersonalCenter',
      component: () => import(/* webpackChunkName: "PersonalCenter" */ '@/views/personalcenter/PersonalCenter'),
      meta: {
        title: '个人中心',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/personaldata',
      name: 'PersonalData',
      component: () => import(/* webpackChunkName: "PersonalData" */ '@/views/personaldata/PersonalData'),
      meta: {
        title: '个人资料',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/solution',
      name: 'Solution',
      component: () => import(/* webpackChunkName: "Solution" */ '@/views/solution/Solution'),
      meta: {
        title: '解决方案',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/application1',
      name: 'Application1',
      component: () => import(/* webpackChunkName: "Application1" */ '@/views/application1/Application1'),
      meta: {
        title: '应用场景-1',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/technicalwhitepaper',
      name: 'TechnicalWhitePaper',
      component: () => import(/* webpackChunkName: "Pdf" */ '@/views/technicalwhitepaper/TechnicalWhitePaper'),
      meta: {
        title: '技术白皮书',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/productcatalogue',
      name: 'ProductCatalogue',
      component: () => import(/* webpackChunkName: "ProductCatalogue" */ '@/views/productcatalogue/ProductCatalogue'),
      meta: {
        title: '产品彩页',
        requiresAuth: true,
        roleId: 1
      }
    },

    {
      path: '/keytechnology',
      name: 'KeyTechnology',
      component: () => import(/* webpackChunkName: "Pdf" */ '@/views/keytechnology/KeyTechnology'),
      meta: {
        title: '关键技术',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "Register" */ '@/views/register/Register'),
      meta: {
        title: '注册',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/invitation',
      name: 'Invitation',
      component: () => import(/* webpackChunkName: "Invitation" */ '@/views/invitation/Invitation'),
      meta: {
        title: '邀请函',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/successfulcase',
      name: 'SuccessfulCase',
      component: () => import(/* webpackChunkName: "SuccessfulCase" */ '@/views/successfulcase/SuccessfulCase'),
      meta: {
        title: '成功案例',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/greatvideo',
      name: 'GreatVideo',
      component: () => import(/* webpackChunkName: "GreatVideo" */ '@/views/greatvideo/GreatVideo'),
      meta: {
        title: '精彩视频',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/pdf',
      name: 'Pdf',
      component: () => import(/* webpackChunkName: "Pdf" */ '@/views/pdf/Pdf'),
      meta: {
        title: '文档',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/pdf2',
      name: 'Pdf2',
      component: () => import(/* webpackChunkName: "Pdf" */ '@/views/pdf/Pdf2'),
      meta: {
        title: '文档2',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/pdf3',
      name: 'Pdf3',
      component: () => import(/* webpackChunkName: "Pdf" */ '@/views/pdf/Pdf3'),
      meta: {
        title: '文档3',
        requiresAuth: true,
        roleId: 1
      }
    },
    {
      path: '/pdfsetting',
      name: 'PdfSetting',
      component: () => import(/* webpackChunkName: "Pdf" */ '@/views/pdf/PdfSetting'),
      meta: {
        title: '文档设置',
        requiresAuth: true,
        roleId: 1
      }
    },
  ]
})
