<template>
  <component
    :is="link && !disabled ? 'a' : 'span'"
    class="nav-item nav-link"
    :class="{ active, disabled }"
    v-bind="{
      href: link,
      'aria-current': active ? 'true' : undefined,
      'aria-disabled': disabled ? 'true' : undefined,
    }"
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
defineProps<{
  link?: string;
  active?: boolean;
  disabled?: boolean;
}>();
</script>
