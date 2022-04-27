<template>
  <component
    :is="link ? 'a' : 'span'"
    class="list-group-item"
    :class="{ 'list-group-item-action': link, active, disabled }"
    v-bind="{
      href: link,
      'aria-current': active ? 'true' : undefined,
      'aria-disabled': disabled ? 'true' : undefined,
      'tabindex': link && disabled ? '-1' : tabindex,
    }"
  >
    <slot/>
  </component>
</template>
<script lang="ts">
export default {
  name: 'BootListGroupItem',
};
</script>
<script lang="ts" setup>
defineProps<{
  link?: string;
  active?: boolean;
  disabled?: boolean;
  tabindex?: string;
}>();
</script>
