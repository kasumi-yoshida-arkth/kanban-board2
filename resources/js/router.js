import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// コンポーネントをインポート
import index from './components/index.vue';
import showVue from './components/showVue.vue';

export default new VueRouter({
  routes: [
    {
      // routeのパス設定
      path: '/vue_router/',
      // コンポーネントの指定
      component: index
    },
    {
      path: '/vue_router/show',
      component: showVue
    }
  ]
})
