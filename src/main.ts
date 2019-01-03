import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import config from './config';

const contentful = require('contentful');

Vue.config.productionTip = false;

const client = contentful.createClient({
  space: config.mySpaceId,
  accessToken: config.myAccessToken,
});

let recipes = {};

client.getEntries({})
  .then((response: {}) => {
    recipes = response;
    new Vue({
      router,
      render: h => h(App),
      data: {
        recipes,
      },
    }).$mount('#app');
    console.log(recipes);
  })
  // eslint-disable-next-line
  .catch(console.error);
