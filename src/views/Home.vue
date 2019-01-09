<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipeList from '@/components/RecipeList.vue';
import { Recipe } from '../models/recipe';

@Component({
  components: {
    RecipeList,
  },
})
export default class Home extends Vue {
  data: any = this.$root.$data;

  recipes: Recipe[] = [];

  created() {
    this.setRecipes();
  }

  setRecipes() {
    this.recipes = this.data.recipes.items;
    return this.recipes;
  }
}
</script>

<style scoped lang="scss">

</style>
