<template>
  <div class="recipe">
    <h1>{{ title }}</h1>
    <p>{{ yields }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Recipe } from '../models/recipe';

@Component
export default class RecipeDetail extends Vue {
  @Prop()
    recipe!: Recipe;

    title: string = this.recipe.title;

    yields: string = this.recipe.yields;

    time: string = this.recipe.time;

    linkToImage: string = this.recipe.linkToImage;

    dietFriendly: boolean = this.recipe.dietFriendly;

    ingredientsLong: string = this.recipe.ingredientsLong; // markdown?

    preparation: string = this.recipe.preparation; // markdown?

    source: string = this.recipe.source;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
