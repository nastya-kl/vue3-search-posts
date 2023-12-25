<template>
  <div class="post">
    <div class="post__text">
      <div class="post__title"> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`posts/${post.id}`)"> Открыть </my-button>
      <my-button @click="$emit('remove', post)"> Удалить </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  background: rgba(255, 229, 190, .3);
  border: 2px solid rgb(43, 37, 27);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 30px;
}
.post__title {
  font-size: 20px;
  font-weight: 700;
}
.post__btns {
  display: flex;
  flex-direction: column;
  gap: 5px
}
</style>
