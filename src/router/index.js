import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LatestView from '@/views/LatestView.vue'
import TypeView from '@/views/TypeView.vue'
import ContactView from '@/views/ContactView.vue'
import ArticleView from '@/views/ArticleView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ServicesView from '@/views/ServicesView.vue'
import Blog from '@/components/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/latest',
      name: 'latest',
      component: LatestView
    },
    {
      path: '/type/:type',
      name: 'type',
      component: TypeView
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactView
    },
    {
      path: '/article/:title',
      name: 'article',
      component: ArticleView,
      props: (route) => ({
        title: route.params.title,
      })
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyView
    },
  ]
})

export default router
