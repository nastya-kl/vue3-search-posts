<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "my-button",
  }
</script>

<style scoped>
.btn {
  padding: 5px 10px;
  background: #e2c093;
  color: rgb(43, 37, 27);
  border: 1px solid rgb(43, 37, 27);
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
}
.btn:hover {
  cursor: pointer;
  background: #c5a782;
}
.btn:disabled {
  background-color: lightgray;
  cursor: default;
  border: 1px solid rgb(155, 155, 155);
  color: rgb(155, 155, 155);
}
</style>