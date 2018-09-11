<template>
  <div id="app">
    <RecipeList msg="Welcome to Your Vue.js App"/>
    <p v-for="(recipe, index) in recipes" :key="index">{{ recipe.fields.title }}</p>
  </div>
</template>

<script>
import RecipeList from './components/RecipeList.vue';

export default {
  name: 'app',
  components: {
    RecipeList,
  },
  data() {
    const recipes = this.$root.recipes.items;
    return { recipes };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
