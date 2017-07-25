import Vue from 'vue'
import Router from 'vue-router'
import Itunes from '@/components/Itunes'
import MyTunes from '@/components/My-Tunes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Itunes',
      component: Itunes
    },
    {
      path:  '/playlist',
      name: 'MyTunes',
      component: MyTunes
    }

  ]
})
