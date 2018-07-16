import Vue from 'vue';
import Vuex from 'vuex';
import { firestore, auth } from './firebaseConfig';
import router from './router';

Vue.use(Vuex);

auth.onAuthStateChanged(async user => {
  if (user) {
    store.commit('authentication/setCurrentUser', { currentUser: user });
    await store.dispatch('authentication/fetchUserProfile');
  }
});

const authentication = {
  namespaced: true,
  state: {
    currentUser: null,
    userProfile: {},
    showLoginForm: true,
    errorMessage: null,
  },
  getters: {
    loggedIn(state) {
      return state.currentUser != null;
    },
    username(state) {
      return state.userProfile.username;
    },
  },
  mutations: {
    setCurrentUser(state, { currentUser }) {
      state.currentUser = currentUser;
    },
    setUserProfile(state, { userProfile }) {
      state.userProfile = userProfile;
    },
    toggleForm(state) {
      state.showLoginForm = !state.showLoginForm;
    },
    setErrorMessage(state, { errorMessage }) {
      state.errorMessage = errorMessage;
    },
  },
  actions: {
    async register({ commit, dispatch }, { username, email, password, passwordConfirmation }) {
      try {
        if (username.length == 0) throw new Error('The username is empty');
        if (!username.match(/^[a-zA-Z0-9_]*$/)) throw new Error('Only a-z, A-Z, 0-9 and underscore are available for username');
        const snapshot = firestore.collection('users').where('username', '==', username).get();
        if (snapshot.size > 0) throw new Error(`The username '${username}' is already used`);
        if (password !== passwordConfirmation) throw new Error('Make sure that the password and password confirmation are the same');

        const response = await auth.createUserWithEmailAndPassword(email, password);

        commit('setCurrentUser', { currentUser: response.user });
        commit('toggleForm'); // show login form instead of register form

        await firestore.collection('users').doc(response.user.uid).set({
          username,
        });
        await dispatch('fetchUserProfile');

        commit('setErrorMessage', { errorMessage: null });

        router.push('/');
      } catch (err) {
        commit('setErrorMessage', { errorMessage: err.message });
      }
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);

        commit('setCurrentUser', { currentUser: user });
        await dispatch('fetchUserProfile');

        commit('setErrorMessage', { errorMessage: null });

        router.push('/');
      } catch (err) {
        commit('setErrorMessage', { errorMessage: err.message });
      }
    },
    async fetchUserProfile({ commit, state }) {
      const userProfileDoc = await firestore.collection('users').doc(state.currentUser.uid).get();
      commit('setUserProfile', { userProfile: userProfileDoc.data() });
    },
    async logout({ commit }) {
      await auth.signOut();

      commit('setCurrentUser', { currentUser: null });
      commit('setUserProfile', { userProfile: {} });

      router.push('/login');
    },
  },
};

const postForm = {
  namespaced: true,
  state: {
    modalActive: false,
  },
  mutations: {
    openPostModal(state) {
      state.modalActive = true;
    },
    closePostModal(state) {
      state.modalActive = false;
    },
  },
};

const store = new Vuex.Store({
  modules: {
    authentication,
    postForm,
  },
});

export default store;
