<template>
  <Check
    v-for="item in data"
    :key="getItemValue(item, valueField)"
    :model-value="isOrContain(value, getItemValue(item, valueField))"
    :single="single"
    :disabled="disabled || (disabledField == null ? undefined : item[disabledField])"
    :switches="switches"
    :inline="inline"
    :label="getItemValue(item, labelField)"
    @update:model-value="(checked) => onCheck(checked as boolean, getItemValue(item, valueField))"
  />
</template>
<script lang="ts">
export default {
  name: 'BootCheckGroup',
};
</script>
<script lang="ts" setup>
import { unref } from 'vue';
import { isOrContain } from '../../utils/comparison';
import { DataSource, useDataSource, useItemValue, useValue } from '../../utils/use';
import Check from './Check.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    defaultValue?: any;
    dataSource?: DataSource<any[]>;
    disabledField?: string;
    labelField?: string;
    valueField?: string;
    single?: boolean;
    disabled?: boolean;
    switches?: boolean;
    inline?: boolean;
  }>(),
  {
    dataSource: () => [],
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue?: any): void;
}>();

const value = useValue(props, emit, props.defaultValue);
const data = useDataSource<any[]>(props.dataSource, []);
const getItemValue = useItemValue();

function onCheck(checked: boolean, itemValue: any) {
  const oldValue = unref(value);
  if (props.single) {
    value.value = checked ? itemValue : ((oldValue === itemValue) ? undefined : oldValue);
  } else {
    const arr = (oldValue || []) as any[];
    const index = arr.findIndex((item) => item === itemValue);
    checked ? arr.push(itemValue) : arr.splice(index, 1);
    value.value = arr;
  }
}
</script>
