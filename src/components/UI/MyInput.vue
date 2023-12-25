<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid rgb(43, 37, 27);
  border-radius: 5px;
  margin-top: 15px;
  outline: none;
  background: rgb(253, 250, 246);
}
.input:focus {
  border: 2px solid rgb(43, 37, 27);
}
</style>
