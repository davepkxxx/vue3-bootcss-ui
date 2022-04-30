<template>
  <main ref="mainEl" class="order-1">
    <Content/>
  </main>
</template>
<script setup>
import { useRoute } from 'vitepress';
import { nextTick, onMounted, onUpdated, ref, toRefs, unref, watch } from 'vue';

const mainEl = ref();

async function addMarkdownClass() {
  await nextTick();
  unref(mainEl).querySelector('div > div').classList.add('markdown-body');
}

onMounted(addMarkdownClass);
watch(useRoute(), addMarkdownClass);

defineExpose({
  mainEl,
});
</script>
<style scoped>
main {
  grid-area: main;
  overflow-x: hidden;
}
:deep(.example) {
  margin-bottom: 8px ;
  padding: 1.5rem;
  border: 1px solid #dee2e6;
}
:deep(.example > *) {
  margin: 0.25rem 0.125rem;
}
</style>