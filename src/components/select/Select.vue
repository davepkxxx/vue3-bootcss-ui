<template>
  <select
    v-model="value"
    :multiple="multiple"
    :disabled="disabled"
    :size="isNumber(size) ? size : undefined"
    class="form-select"
    :class="[
      size == null || isNumber(size) ? '' : `form-select-${size}`
    ]"
  >
    <option
      v-for="item in data"
      :key="getItemValue(item, valueField)"
      :value="getItemValue(item, valueField)"
    >{{ getItemValue(item, labelField) }}</option>
  </select>
</template>
<script lang="ts">
export default {
  name: 'BootSelect',
};
</script>
<script lang="ts" setup>
import { isNumber } from '../../utils/math';
import { DataSource, useDataSource, useItemValue, useValue } from '../../utils/use';

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    defaultValue?: any;
    dataSource?: DataSource<any[]>;
    labelField?: string;
    valueField?: string;
    multiple?: boolean;
    disabled?: boolean;
    size?: number | string;
  }>(),
  {
    dataSource: () => [],
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue?: any[]): void;
}>();

const value = useValue(props, emit, props.defaultValue);
const data = useDataSource<any[]>(props.dataSource);
const getItemValue = useItemValue();

defineExpose({
  value,
  data,
  getItemValue,
  isNumber,
});
</script>
