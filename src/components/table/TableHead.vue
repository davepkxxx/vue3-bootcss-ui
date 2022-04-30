<template>
  <thead :class="theme ? `table-${theme}` : ''">
    <tr>
      <th v-for="col in cols" :key="col.name" scope="col">{{ col.label }}</th>
    </tr>
  </thead>
</template>
<script lang="ts">
export default {
  name: 'BootTableHead',
};
</script>
<script lang="ts" setup>
import { TableColProps } from './model';
defineProps<{
  cols: TableColProps[];
  theme?: string;
}>();
</script>
