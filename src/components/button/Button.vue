<template>
  <component
    :is="link ? 'a' : 'button'"
    :disabled="disabled"
    class="btn"
    :class="[
      theme ? `btn${outline ? '-outline' : ''}-${theme}` : '',
      size ? `btn-${size}` : '',
      link && disabled ? 'disabled' : '',
    ]"
    v-bind="{
      type: link ? undefined : type,
      'aria-disabled': disabled ? 'true' : undefined,
      'tabindex': link && disabled ? '-1' : tabindex,
    }"
  >
    <slot/>
  </component>
</template>
<script lang="ts">
export default {
  name: 'BootButton',
};
</script>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string;
    link?: string;
    disabled?: boolean;
    theme?: string;
    outline?: boolean;
    size?: string;
    tabindex?: string;
  }>(),
  {
    type: 'button',
  },
);
</script>
