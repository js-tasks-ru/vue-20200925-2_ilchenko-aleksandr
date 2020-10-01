import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#app',

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count += 1;
    },
  },
});
