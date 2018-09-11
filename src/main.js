import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

const config = require('./config.js');
const contentful = require('contentful');

const client = contentful.createClient({
  space: config.default.mySpaceId,
  accessToken: config.default.myAccessToken,
});

let recipes = {};

client.getEntries({})
  .then((response) => {
    recipes = response;
    new Vue({
      render: h => h(App),
      data: {
        recipes,
      },
    }).$mount('#app');
  })
  // eslint-disable-next-line
  .catch(console.error);
