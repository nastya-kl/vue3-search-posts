<template>
  <select :value="modelValue" @change="changeOptions" class="dropdown">
    <option 
      disabled 
      value=""
    >
      Выберите из списка
    </option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String, Number
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>

<style scoped>
.dropdown {
  border: 1px solid rgb(43, 37, 27);
  border-radius: 4px;
  background: rgb(253, 250, 246);
}
.dropdown:focus {
  border: 2px solid rgb(43, 37, 27);
}
</style>
