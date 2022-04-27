<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
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