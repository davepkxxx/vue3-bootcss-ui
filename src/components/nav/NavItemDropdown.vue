<template>
  <Dropdown
    class="nav-item"
    :direction="direction"
    :disabled="disabled"
    :theme="theme"
    :button-class="'nav-link ' + buttonClass"
    :size="size"
    :placement="placement"
    @click="$emit('click')"
  >
    <slot/>
    <template #menu>
      <slot name="menu"/>
    </template>
  </Dropdown>
</template>
<script lang="ts">
export default {
  name: 'BootNavItemDropdown',
};
</script>
<script lang="ts" setup>
import Dropdown from '../dropdown/Dropdown.vue';

withDefaults(
  defineProps<{
    direction?: string;
    disabled?: boolean;
    theme?: string;
    buttonClass?: string;
    size?: string;
    placement?: string;
  }>(),
  {
    buttonClass: '',
  },
);

defineEmits<{
  (e: 'click'): void;
}>();
</script>
<style>
.navbar-nav .nav-link.dropdown-toggle {
  border: 0;
}
</style>
