import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Host from '@/components/Host'
import Fortune from '@/components/Fortune'
import Search from '@/components/Search'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/host',
      name: 'Host',
      component: Host
    },
    {
      path: '/fortune',
      name: 'Fortune',
      component: Fortune
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
