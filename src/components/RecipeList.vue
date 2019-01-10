<template>
  <div>
    <p>RecipeList</p>
    <router-link
      v-for="(recipe, index) in recipes.items"
      :key="index"
      :recipe="recipe.fields"
      :to="`/recipe-detail/${recipe.sys.id}`"
      class="recipe-link">
      {{ recipe.fields.title }}
    </router-link>
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
  @Prop() recipes!: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .recipe-link {
    display: block;
  }

</style>
