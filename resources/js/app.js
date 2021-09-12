require("./bootstrap");

import Vue from 'vue';
// window.Vue = require("vue");

Vue.component("kanban-board", require("./components/KanbanBoard.vue").default);

const app = new Vue({
    el: "#app"
});
