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
import { useSidebar } from '../utils/useVitepress';

const sidebar = useSidebar();
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
.accordion-item:first-of-type /deep/ .accordion-button,
.list-group {
  border-radius: 0;
}
/deep/ .accordion-body {
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