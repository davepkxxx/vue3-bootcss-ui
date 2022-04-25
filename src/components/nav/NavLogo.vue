<template>
  <img :src="src" :alt="alt" :width="width" :height="height" class="d-inline-block align-text-top">
</template>
<script lang="ts">
export default {
  name: 'BootNavLogo',
};
</script>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    width?: string;
    height?: string;
  }>(),
  {
    alt: 'logo',
    width: '30',
    height: '24',
  },
);
</script>
