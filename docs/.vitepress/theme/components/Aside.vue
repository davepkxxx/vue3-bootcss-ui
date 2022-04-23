<template>
  <aside>
    <boot-accordion>
      <boot-accordion-item v-for="item in sidebar" :key="item.text">
        <template v-slot:header>{{item.text}}</template>
        <boot-list-group>
          <boot-list-group-item v-for="child in item.children" :key="child.text" :linked="true" :link="child.link">
            {{child.text}}
          </boot-list-group-item>
        </boot-list-group>
      </boot-accordion-item>
    </boot-accordion>
  </aside>
</template>
<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const sidebar = computed(() => {
  const { sidebar } = useData().theme.value;
  const path = Object.getOwnPropertyNames(sidebar).find(path => location.pathname.startsWith(path));
  return sidebar[path];
});
</script>
<style scoped>
.accordion-item {
  border: 0;
}
.accordion-item:first-of-type,
.accordion-item:last-of-type,
.accordion-item:first-of-type /deep/ .accordion-button,
.list-group {
  border-radius: 0;
}
/deep/ .accordion-body {
  padding: 0;
}
.list-group-item:first-child {
  border-top: 0;
}
</style>