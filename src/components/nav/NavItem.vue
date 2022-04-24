<template>
  <component
    :is="link && !disabled ? 'a' : 'span'"
    class="nav-item nav-link"
    :class="{ active, disabled }"
    :href="link"
  >
    <slot/>
  </component>
</template>
<script lang="ts">
export default {
  name: 'BootNavItem',
};
</script>
<script lang="ts" setup>
defineProps({
  link: String,
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
