<template>
  <main ref="main" class="order-1">
    <Content/>
  </main>
</template>
<script setup>
import { useRoute } from 'vitepress';
import { nextTick, onMounted, onUpdated, ref, toRefs, watch } from 'vue';

const main = ref();

async function addMarkdownClass() {
  await nextTick();
  main.value.querySelector('div > div').classList.add('markdown-body');
}

onMounted(addMarkdownClass);
watch(useRoute(), addMarkdownClass);

defineExpose({
  main,
});
</script>
<style scoped>
main {
  grid-area: main;
}
:deep(.example) {
  margin-bottom: 16px;
  padding: 1.5rem;
  border: 1px solid #dee2e6;
}
:deep(.example > *+*) {
  margin-top: 1rem;
}
</style>