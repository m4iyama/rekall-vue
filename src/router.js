import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import { auth } from './firebaseConfig';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*' ,
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(v => v.meta.requiresAuth);
  const { currentUser } = auth;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
