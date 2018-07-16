<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item brand-text">REKALL</router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/">{{ username }}</router-link>
          </div>
          <div class="navbar-item">
            <a @click="handleLogout" class="button is-white is-outlined">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
