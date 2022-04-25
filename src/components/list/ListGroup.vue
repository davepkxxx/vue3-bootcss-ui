<template>
  <div class="list-group" :class="{ 'list-group-flush': flush }">
    <slot/>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootListGroup',
};
</script>
<script lang="ts" setup>
defineProps<{
  flush: boolean
}>();
</script>
