<template>
  <header>
    <boot-navbar>
      <template v-slot:brand>
        <boot-navbar-brand href="/">
          <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
          Bootstrap UI
        </boot-navbar-brand>
      </template>
      <boot-nav-item
        v-for="item in nav"
        :key="item.link"
        :link="item.link"
        :active="item.link !== '/' && pathname.startsWith(item.link)"
      >{{item.text}}</boot-nav-item>
    </boot-navbar>
  </header>
</template>
<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { title, theme } = useData();
const { logo, nav } = theme.value;
const pathname = computed(() => location.pathname);
</script>