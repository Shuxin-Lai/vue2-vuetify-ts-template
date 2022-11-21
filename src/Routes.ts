import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout/Layout.vue'

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import Typography from '@/pages/Typography/Typography.vue'
import Tables from '@/pages/Tables/Basic.vue'
import Notifications from '@/pages/Notifications/Notifications.vue'
import Icons from '@/pages/Icons/Icons.vue'
import Charts from '@/pages/Charts/Charts.vue'
import Maps from '@/pages/Maps/Google.vue'
// import Error from '@/pages/Error/Error.vue'
// import Login from '@/pages/Login/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login/Login.vue'),
    },
    {
      path: '/',
      name: 'Layout',
      redirect: 'dashboard',
      component: () => import('@/components/Layout/Layout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/pages/Dashboard/Dashboard.vue'),
        },
        {
          path: 'typography',
          name: 'Typography',
          component: () => import('@/pages/Typography/Typography.vue'),
        },
        {
          path: 'tables',
          name: 'Tables',
          component: () => import('@/pages/Tables/Basic.vue'),
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: () => import('@/pages/Notifications/Notifications.vue'),
        },
        {
          path: 'icons',
          name: 'Icons',
          component: () => import('@/pages/Icons/Icons.vue'),
        },
        {
          path: 'charts',
          name: 'Charts',
          component: () => import('@/pages/Charts/Charts.vue'),
        },
        // {
        //   path: 'maps',
        //   name: 'Maps',
        //   component: Maps,
        // },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: () => import('@/pages/Error/Error.vue'),
    },
  ],
  mode: 'history',
})

export default router
