<template>
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.min.css" rel="stylesheet"/>
  <link href="https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon.ico" rel="icon"/>
  <Header/>
  <div class="container-xxl">
    <Aside v-if="sidebar"/>
    <Main/>
  </div>
</template>
<script setup>
import { useSidebar } from './utils/useVitepress';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

const sidebar = useSidebar();
</script>
<style scoped>
.container-xxl {
  display: grid;
  gap: 1.5rem;
  grid-template-areas: "sidebar main";
  grid-template-columns: 1fr 5fr;
}
aside {
  flex: none;
}
main {
  flex: auto;
}
</style>