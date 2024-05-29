import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutProjectView from "@/views/AboutProjectView.vue";
import AdvantagesView from "@/views/AdvantagesView.vue";
import FooterSite from "@/views/FooterSite.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about-project',
      name: 'ProjectAboutView',
      component: AboutProjectView,
    },
    {
      path: '/advantages',
      name: 'AdvantagesView',
      component: AdvantagesView,
    },
    {
      path: '/footer-site',
      name: 'FooterSite',
      component: FooterSite,
    },
  ]
})

export default router
