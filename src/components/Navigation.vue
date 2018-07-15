<template>
  <div>
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li>{{ username }}</li>
      <li><a @click="handleLogout">logout</a></li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        username: 'authentication/username',
      }),
    },
    methods: {
      handleLogout() {
        this.$store.dispatch('authentication/logout');
      },
    },
  };
</script>

<style scoped>
</style>
