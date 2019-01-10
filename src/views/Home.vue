<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipeList from '@/components/RecipeList.vue';

@Component({
  components: {
    RecipeList,
  },
})
export default class Home extends Vue {
  data: any = this.$root.$data;

  recipes: any = {};

  created() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipes = this.data.recipes;
    return this.recipes;
  }
}
</script>

<style scoped lang="scss">

</style>
