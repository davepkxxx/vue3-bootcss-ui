<template>
  <tbody>
    <tr v-for="(row, i) in data" :key="row" :class="themeField && row[themeField] ? `table-${row[themeField]}` : ''">
      <td v-for="col in cols" :key="col.name">
        {{ col.type === 'index' ? i + 1 : (col.name ? row[col.name] : '') }}
      </td>
    </tr>
  </tbody>
</template>
<script lang="ts">
export default {
  name: 'BootTableBody',
};
</script>
<script lang="ts" setup>
import { TableColProps } from './model';
defineProps<{
  cols: TableColProps[];
  data: any[];
  themeField?: string;
}>();
</script>
