<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h3 class="title is-3 login-title">Login to Rekall</h3>

        <b-message type="is-danger" v-if="errorMessage">{{ errorMessage }}</b-message>

        <form @submit.prevent="handleSubmit">
          <b-field label="Email">
            <b-input v-model="email" type="email"></b-input>
          </b-field>

          <b-field label="Password">
            <b-input v-model="password" type="password"></b-input>
          </b-field>

          <button type="submit" class="button is-primary">Log in</button>
        </form>

        <hr>

        <p>
          No account? <a @click="handleLinkClick">Let's register!</a>
        </p>
      </div>
    </div>
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
  .login-title {
    margin-top: 2rem;
  }
</style>