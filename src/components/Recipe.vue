<template>
  <div class="recipe">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Recipe extends Vue {
  @Prop()
    title!: string;

    yields!: string;

    time!: string;

    linkToImage!: string;

    dietFriendly!: boolean;

    ingredientsLong!: string; // markdown?

    preparation!: string; // markdown?

    source!: string;

    image!: string;

    ingredients!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
