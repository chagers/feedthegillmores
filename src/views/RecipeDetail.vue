<template>
  <div class="recipe">
    <h1>{{ recipe.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Recipe } from '../models/recipe';


@Component
export default class RecipeDetail extends Vue {
  data: any = this.$root.$data;

  recipe = {};

  created() {
    this.getRecipe(this.$route.params.id);
  }

  getRecipe(id: string) {
    const recipes = this.data.recipes.items;
    const recipeObject = recipes.find((r: any) => r.sys.id === id);
    this.recipe = recipeObject.fields;
    return this.recipe;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
