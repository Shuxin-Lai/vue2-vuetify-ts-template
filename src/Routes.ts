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
import Error from '@/pages/Error/Error.vue'
import Login from '@/pages/Login/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Layout',
      redirect: 'dashboard',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography,
        },
        {
          path: 'tables',
          name: 'Tables',
          component: Tables,
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications,
        },
        {
          path: 'icons',
          name: 'Icons',
          component: Icons,
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts,
        },
        {
          path: 'maps',
          name: 'Maps',
          component: Maps,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
  ],
  mode: 'history',
})

export default router
