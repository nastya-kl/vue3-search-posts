<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  background: rgb(255, 247, 238);
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>
