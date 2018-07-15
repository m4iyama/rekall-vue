<template>
  <div>
    <navigation v-if="loggedIn"/>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Navigation from './components/Navigation';

  export default {
    components: {
      Navigation,
    },
    computed: {
      ...mapGetters({
        loggedIn: 'authentication/loggedIn',
      }),
    },
  };
</script>

<style>

</style>
