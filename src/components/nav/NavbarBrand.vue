<template>
  <component
    :is="link ? 'a' : 'span'"
    :href="link"
    class="navbar-brand"
  >
    <slot/>
  </component>
</template>
<script lang="ts">
export default {
  name: 'BootNavbarBrand',
};
</script>
<script lang="ts" setup>
defineProps<{
  link?: string;
}>();
</script>
