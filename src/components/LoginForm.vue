<template>
  <div>
    <h2>Login</h2>

    <form @submit.prevent="handleSubmit">
      email <input v-model="email" type="email"> <br>
      password <input v-model="password" type="password"> <br>
      <button type="submit">login</button>
    </form>

    <a @click="handleLinkClick">create account!</a>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      ...mapState({
        errorMessage: state => state.authentication.errorMessage,
      }),
    },
    methods: {
      handleSubmit() {
        const { email, password } = this;

        this.$store.dispatch('authentication/login', { email, password });
      },
      handleLinkClick() {
        this.$store.commit('authentication/toggleForm');
      },
    },
  };
</script>

<style scoped>
</style>