<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item brand-text">REKALL</router-link>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <a @click="handlePostLinkClick">+</a>
            </div>
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

    <b-modal :active="modalActive" :onCancel="handleCancelModal" has-modal-card>
      <post-form></post-form>
    </b-modal>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import PostForm from './PostForm';

  export default {
    components: {
      PostForm,
    },
    computed: {
      ...mapState({
        modalActive: state => state.postForm.modalActive,
      }),
      ...mapGetters({
        username: 'authentication/username',
      }),
    },
    methods: {
      handleLogout() {
        this.$store.dispatch('authentication/logout');
      },
      handlePostLinkClick() {
        this.$store.commit('postForm/openPostModal');
      },
      handleCancelModal() {
        this.$store.commit('postForm/closePostModal');
      },
    },
  };
</script>

<style scoped>
</style>
