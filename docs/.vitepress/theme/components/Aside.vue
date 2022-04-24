<template>
  <aside>
    <boot-accordion :active-names="activeNames">
      <boot-accordion-item v-for="menu in menus" :key="menu.text" :name="menu.text">
        <template v-slot:header>{{menu.text}}</template>
        <boot-list-group>
          <boot-list-group-item
            v-for="child in menu.children"
            :key="child.text"
            :link="child.link"
            :active="path.startsWith(child.link)"
          >{{child.text}}</boot-list-group-item>
        </boot-list-group>
      </boot-accordion-item>
    </boot-accordion>
  </aside>
</template>
<script setup>
import { useRoute } from 'vitepress';
import { computed, ref, toRefs, watch } from 'vue';
import { useSidebar } from '../utils/useVitepress';

function getDefaultActiveName(menus) {
  const names = [];
  const current = menus.find((menu) => menu.children.some(child => location.pathname.startsWith(child.link)));

  if (current) {
    names.push(current.text);
  }

  if (!names.length && menus.length) {
    names.push(menus[0].text);
  }

  return names;
}

const menus = useSidebar();
const activeNames = ref(getDefaultActiveName(menus.value));
watch(menus, value => activeNames.value = getDefaultActiveName(value));
const path = computed(() => useRoute().path);

defineExpose({
  menus,
  activeNames,
  path,
});
</script>
<style scoped>
aside {
  border-right: 1px solid rgba(0,0,0,.125);
};
.accordion-item {
  border: 0;
}
.accordion-item:first-of-type,
.accordion-item:last-of-type,
.accordion-item:first-of-type :deep(.accordion-button),
.list-group {
  border-radius: 0;
}
:deep(.accordion-body) {
  padding: 0;
}
.accordion-item,
.list-group-item {
  border-left: 0;
  border-right: 0;
}
.list-group-item:first-child {
  border-top: 0;
}
.list-group-item:last-child {
  border-bottom: 0;
}
</style>