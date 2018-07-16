<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h3 class="title is-3 register-title">Register to Rekall</h3>

        <b-message type="is-danger" v-if="errorMessage">{{ errorMessage }}</b-message>

        <form @submit.prevent="handleSubmit">
          <b-field label="Username">
            <b-input v-model="username" type="text"></b-input>
          </b-field>
          <b-field label="Email">
            <b-input v-model="email" type="email"></b-input>
          </b-field>
          <b-field label="Password">
            <b-input v-model="password" type="password"></b-input>
          </b-field>
          <b-field label="Password Confirmation">
            <b-input v-model="passwordConfirmation" type="password"></b-input>
          </b-field>

          <button type="submit" class="button is-primary">Register</button>
        </form>

        <hr>

        <p>
          <a @click="handleLinkClick">Back to login!</a>
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
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      };
    },
    computed: {
      ...mapState({
        errorMessage: state => state.authentication.errorMessage,
      }),
    },
    methods: {
      handleSubmit() {
        const { username, email, password, passwordConfirmation } = this;

        this.$store.dispatch('authentication/register', { username, email, password, passwordConfirmation });
      },
      handleLinkClick() {
        this.$store.commit('authentication/toggleForm');
      },
    },
  };
</script>

<style scoped>
  .register-title {
    margin-top: 2rem;
  }
</style>