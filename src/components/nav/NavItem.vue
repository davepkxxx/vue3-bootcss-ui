<template>
  <li class="nav-item">
    <a
      class="nav-link"
      :class="{ active }"
      :aria-current="active ? 'true': 'false'"
      :href="link"
    >Home</a>
  </li>
</template>
<script lang="ts">
export default {
  name: 'BootNavItem',
};
</script>
<script lang="ts" setup>
defineProps({
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
