<template>
  <form @submit.prevent>
    <h4 style="color: rgb(54, 46, 37);">Создание поста</h4>
    <my-input
      v-focus
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px;"
      @click="createPost"
      :disabled="isButtonDisabled"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  computed: {
    isButtonDisabled() {
      return !(this.post.title.trim() && this.post.body.trim());
    },
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      // чтобы сгенерировать событие, на которое родительский компонент может подписаться, есть специальная функция
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
