<template>
  <div :class="{ 'table-responsive': responsive }">
    <table
      class="table"
      :class="[
        striped ? 'table-striped' : '',
        hover ? 'table-hover' : '',
        bordered ? 'table-bordered' : '',
        borderless ? 'table-borderless' : '',
        borderTheme ? `border-${borderTheme}` : '',
        theme ? `table-${theme}` : '',
        size ? `table-${size}` : '',
        captionTop ? 'caption-top' : '',
      ]"
    >
      <caption v-if="caption != null">{{ caption }}</caption>
      <TableHead v-if="cols" :cols="cols" :theme="headTheme"/>
      <TableBody v-if="cols && data" :cols="cols" :data="data" :theme-field="rowThemeField"/>
    </table>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootTable',
};
</script>
<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue';
import { useDataSource } from '../../utils/useData';
import { filterChildNodesByType } from '../../utils/vue';
import { TableColProps } from './model';
import TableBody from './TableBody.vue';
import TableHead from './TableHead.vue';

const props = defineProps<{
  dataSource?: any[] | Promise<any[]>;
  responsive?: boolean;
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  borderTheme?: string;
  theme?: string;
  headTheme?: string;
  rowThemeField?: string;
  size?: string;
  caption?: string;
  captionTop?: boolean;
}>();

const cols: Ref<TableColProps[]> = ref([]);
const data = useDataSource(props.dataSource);

onMounted(() => {
  cols.value = filterChildNodesByType((type) => type === 'BootTableCol').map((comp) => comp.props) as unknown[] as TableColProps[];
});
</script>
