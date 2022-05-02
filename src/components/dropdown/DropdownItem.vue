<template>
  <li>
    <component
      :is="link ? 'a' : 'button'"
      :type="link ? undefined : 'button'"
      :href="link"
      class="dropdown-item"
      :class="{ active, disabled }"
      :aria-current="active ? 'true' : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :tabindex="link && disabled ? '-1' : tabindex"
    >
      <slot/>
    </component>
  </li>
</template>
<script lang="ts">
export default {
  name: 'BootDropdownItem',
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
