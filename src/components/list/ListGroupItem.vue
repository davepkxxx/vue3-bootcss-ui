<template>
  <component
    :is="link ? 'a' : 'span'"
    class="list-group-item"
    :class="{ 'list-group-item-action': link, active }"
    v-bind="{ href: link }"
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
defineProps({
  link: String,
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
