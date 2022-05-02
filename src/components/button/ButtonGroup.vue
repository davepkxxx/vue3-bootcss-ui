<template>
  <div class="btn-group" :class="{ 'btn-group-vertical': vertical }" role="group">
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
