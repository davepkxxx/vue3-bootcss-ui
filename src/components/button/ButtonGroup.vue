<template>
  <div :class="vertical ? 'btn-group-vertical': 'btn-group'" role="group">
    <slot/>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootButtonGroup',
};
</script>
<script lang="ts" setup>
defineProps<{
  vertical?: boolean;
}>();
</script>
