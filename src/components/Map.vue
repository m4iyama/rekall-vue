<template>
  <gmap-map
    :center="center"
    :zoom="12"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      v-for="post in posts"
      :key="post.id"
      :position="post.position"
    >
    </gmap-marker>
  </gmap-map>
</template>

<script>
  export default {
    props: {
      center: Object,
      posts: Array,
    },
  };
</script>

<style scoped>

</style>