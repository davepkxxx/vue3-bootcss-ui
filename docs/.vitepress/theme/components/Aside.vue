<template>
  <aside>
    <boot-accordion :active-names="activeNames" multi>
      <boot-accordion-item
        v-for="menu in menus"
        :key="menu.text"
        :name="menu.text"
        toggle-button-class="btn d-inline-flex align-items-center rounded"
      >
        <template #header>{{menu.text}}</template>
        <boot-list-group class="fw-normal pb-1 small">
          <boot-list-group-item
            v-for="child in menu.children"
            :key="child.text"
            :link="child.link"
            :active="path.startsWith(child.link)"
            class="d-inline-flex align-items-center rounded"
          >{{child.text}}</boot-list-group-item>
        </boot-list-group>
      </boot-accordion-item>
    </boot-accordion>
  </aside>
</template>
<script setup>
import { useRoute } from 'vitepress';
import { computed, ref, toRefs, unref, watch } from 'vue';
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
const activeNames = ref(getDefaultActiveName(unref(menus)));
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
  grid-area: sidebar;
}
.accordion {
  position: sticky;
  top: 5rem;
  display: block !important;
  height: calc(100vh - 7rem);
  padding-left: 0.25rem;
  margin-left: -0.25rem;
  overflow-x: hidden;
  overflow-y: auto;
  font-weight: 600;
}
.accordion-item {
  margin-bottom: 4px;
  border: 0;
}
:deep(.accordion-header) {
  display: inline-block;
}
:deep(.accordion-button) {
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0,0,0,0.65);
  background-color: transparent;
  border: 0;
  box-shadow: none;
}
:deep(.accordion-button:focus) {
  box-shadow: none;
}
:deep(.accordion-button:not(.collapsed)) {
  color: rgba(0,0,0,0.85);
  background-color: transparent;
  box-shadow: none;
}
:deep(.accordion-button::before) {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}
:deep(.accordion-button:not(.collapsed)::before) {
  transform: rotate(90deg);
}
:deep(.accordion-button::after) {
  display: none;
}
:deep(
  .accordion-button:hover,
  .accordion-button:focus,
  .list-group-item:hover,
  .list-group-item:focus,
) {
  color: rgba(0,0,0,0.85);
  background-color: rgba(121,82,179,0.1);
}
:deep(.accordion-body) {
  padding: 0;
}
.list-group-item {
  display: inline-block;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  color: rgba(0,0,0,0.65);
  text-decoration: none;
  border: 0;
}
.list-group-item.active {
  font-weight: 600;
  color: rgba(0,0,0,0.85);
  background: #fff;
}
</style>