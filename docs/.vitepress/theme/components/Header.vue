<template>
  <header>
    <boot-navbar>
      <template v-slot:brand>
        <boot-navbar-brand href="/">
          <img :src="logo" width="30" height="24" class="d-inline-block align-text-top">
          {{title}}
        </boot-navbar-brand>
      </template>
      <boot-nav-item v-for="item in nav" :key="item.link" :link="item.link">
        {{item.text}}
      </boot-nav-item>
    </boot-navbar>
  </header>
</template>
<script setup>
import { useData } from 'vitepress';
const { title, theme } = useData();
const { logo, nav } = theme.value;
</script>