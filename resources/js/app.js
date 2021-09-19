require("./bootstrap");

import Vue from 'vue';
import draggable from 'vuedraggable';
import store from './store';
import router from './router';

Vue.component("kanban-board", require("./components/KanbanBoard.vue").default);
Vue.component('draggable', draggable);

const app = new Vue({
    el: "#app",
    store,
    router,
});
