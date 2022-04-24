<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <link href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.1.0/github-markdown.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.min.css" rel="stylesheet"/>
  <link href="https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon.ico" rel="icon"/>
  <Header/>
  <div class="container-fluid">
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
<style>
html,
body,
#app {
  height: 100%;
}
</style>
<style scoped>
.container-fluid {
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  height: calc(100% - 56px);
}
aside {
  width: 20rem;
  flex: none;
}
main {
  flex: auto;
}
</style>