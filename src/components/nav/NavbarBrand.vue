<template>
  <a class="navbar-brand" :href="link">
    <slot/>
  </a>
</template>
<script lang="ts">
export default {
  name: 'BootNavbarBrand',
};
</script>
<script lang="ts" setup>
defineProps({
  link: {
    type: String,
    default: 'javascript:void(0)',
  },
});
</script>
