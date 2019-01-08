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

interface Recipe {
  title: '',
  yields: '',
  time: '',
  linkToImage: '',
  dietFriendly: false,
  ingredientsLong: '', // markdown?
  preparation: '', // markdown?
  source: '',
  image: '',
  ingredients: '',
}

client.getEntries({})
  .then((response: { items: []; }) => {
    new Vue({
      router,
      render: h => h(App),
      data() {
        return { recipes: response };
      },
    }).$mount('#app');
  })
  // eslint-disable-next-line
  .catch(console.error);
