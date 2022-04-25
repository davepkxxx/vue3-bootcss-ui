<template>
  <component
    :is="link ? 'a' : 'span'"
    class="navbar-brand"
    v-bind="{ href: link }"
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
  link: string;
}>();
</script>
