<template>
  <div class="container">
    <login-form v-if="showLoginForm"/>
    <register-form v-else/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import LoginForm from '../components/LoginForm';
  import RegisterForm from '../components/RegisterForm';

  export default {
    components: {
      LoginForm,
      RegisterForm,
    },
    computed: {
      ...mapState({
        showLoginForm: state => state.authentication.showLoginForm,
        errorMessage: state => state.authentication.errorMessage,
      }),
    },
  };
</script>
