<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="navbar__logo">SearchPosts</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >О сайте</my-button
      >
      <my-button @click="$router.push('/store')" style="margin-left: 20px"
        >Store</my-button
      >
      <my-button @click="$router.push('/composition')" style="margin-left: 20px"
        >Composition</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background: rgb(255, 229, 190);
  box-shadow: 2px 2px 4px rgb(65, 53, 40);
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: sticky;
  top: 0;
  z-index: 10;
}
.navbar__logo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: rgb(43, 37, 27);
}
.navbar__logo:hover {
  cursor: pointer;
  color: rgb(80, 71, 52);
}
.navbar__btns {
  margin-left: auto;
}
</style>
