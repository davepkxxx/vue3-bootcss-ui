<template>
  <img :src="src" :alt="alt" :width="width" :height="height" class="d-inline-block align-text-top">
</template>
<script lang="ts">
export default {
  name: 'BootNavLogo',
};
</script>
<script lang="ts" setup>
defineProps({
  src: String,
  alt: {
    type: String,
    default: 'logo',
  },
  width: {
    type: String,
    default: '30',
  },
  height: {
    type: String,
    default: '24',
  },
});
</script>
