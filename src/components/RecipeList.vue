<template>
  <div>
    <p>RecipeList</p>
    <Recipe v-for="(recipe, index) in recipes" :key="index" :title="recipe.fields.title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Recipe from '@/components/Recipe.vue';

@Component({
  components: {
    Recipe,
  },
})

export default class RecipeList extends Vue {
  @Prop()
    recipes!: any
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
