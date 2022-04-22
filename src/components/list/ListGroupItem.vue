<template>
  <component
    :is="linked ? 'a' : 'span'"
    class="list-group-item"
    :class="{ 'list-group-item-action': linked }"
    :aria-current="active ? 'true': 'false'"
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
  link: {
    type: String,
    default: 'javascript:void(0)',
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
