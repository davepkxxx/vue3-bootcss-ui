<template>
  <ul class="dropdown-menu" :class="{ 'dropdown-menu-dark': dark }">
    <slot/>
  </ul>
</template>
<script lang="ts">
export default {
  name: 'BootDropdownMenu',
};
</script>
<script lang="ts" setup>
defineProps<{
  dark?: boolean;
}>();
</script>
<style>
.dropdown-menu {
  position: static;
  display: block;
}
</style>
