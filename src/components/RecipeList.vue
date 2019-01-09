<template>
  <div v-if="recipes.length > 0">
    <p>RecipeList</p>
    <RecipeDetail v-for="(recipe, index) in recipes" :key="index" :recipe="recipe.fields" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import RecipeDetail from '@/views/RecipeDetail.vue';
import { Recipe } from '../models/recipe';

@Component({
  components: {
    RecipeDetail,
  },
})

export default class RecipeList extends Vue {
  @Prop() recipes!: Recipe[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
