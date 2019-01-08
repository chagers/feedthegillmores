<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RecipeList :recipes="data.recipes.items" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipeList from '@/components/RecipeList.vue'; // @ is an alias to /src

@Component({
  components: {
    RecipeList,
  },
  data() {
    return {
      data: this.$root,
    };
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">

</style>
