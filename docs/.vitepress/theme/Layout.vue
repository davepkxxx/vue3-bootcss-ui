<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <Header/>
  <div class="container-fluid">
    <Aside v-if="visibleSidebar"/>
    <Main/>
  </div>
</template>
<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

const visibleSidebar = computed(() => Object.getOwnPropertyNames(useData().theme.value.sidebar).some(path => location.pathname.startsWith(path)));
</script>
<style scoped>
.container-fluid {
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
}
aside {
  width: 20rem;
  flex: none;
}
main {
  flex: auto;
}
</style>