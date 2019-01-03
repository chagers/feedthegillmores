<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'RecipeList',
  props: {
    title: String,
    yield: String,
    time: String,
    linkToImage: String,
    dietFriendly: Boolean,
    ingredientsLong: String, // markdown?
    preparation: String, // markdown?
    source: String,
    image: String,
    ingredients: String,

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
