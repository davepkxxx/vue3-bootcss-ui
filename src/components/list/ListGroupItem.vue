<template>
  <component
    :is="linked ? 'a' : 'span'"
    class="list-group-item"
    :class="{ 'list-group-item-action': linked }"
    v-bind="{ href: linked ? link : undefined }"
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
  linked: {
    type: Boolean,
    default: false,
  },
  link: String,
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
