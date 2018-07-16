<template>
  <div class="modal-card" style="width: 500px; height: 500px;">
    <div class="modal-card-head">
      Create post
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="modal-card-body">
        <b-field label="Comment">
          <b-input type="text"></b-input>
        </b-field>
      </div>

      <div class="modal-card-foot">
        <button class="button is-primary" type="submit">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSubmit() {
        console.log('submit');
      },
    },
  };
</script>

<style scoped>

</style>