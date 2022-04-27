<template>
  <Check
    v-for="item in data"
    :key="valueField == null ? item : item[valueField]"
    :model-value="value && value.some(e => e === (valueField == null ? item : item[valueField]))"
    :disabled="disabled || (disabledField && item[disabledField])"
    :switches="switches"
    :inline="inline"
    :label="labelField == null ? item : item[labelField]"
    @update:model-value="(checked) => onCheck(checked as boolean, item)"
  />
</template>
<script lang="ts">
export default {
  name: 'BootCheckGroup',
};
</script>
<script lang="ts" setup>
import { useValue } from 'src/utils/useData';
import { Ref, ref } from 'vue';
import Check from './Check.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: any[];
    dataSource?: any[] | Promise<any[]>;
    disabledField?: string;
    labelField?: string;
    valueField?: string;
    disabled?: boolean;
    switches?: boolean;
    inline?: boolean;
  }>(),
  {
    modelValue: () => [],
    dataSource: () => [],
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue?: any[]): void;
}>();

const value = useValue(props, emit);

const data: Ref<any[]> = ref([]);
if (props.dataSource instanceof Promise) {
  props.dataSource.then((value) => data.value = value);
} else if (Array.isArray(props.dataSource)) {
  data.value = props.dataSource as any[];
}

function onCheck(checked: boolean, dataItem: any) {
  const dataValue = props.valueField == null ? dataItem : dataItem[props.valueField];
  if (checked) {
    value.value.push(dataValue);
  } else {
    const start = value.value.findIndex((valueItem) => valueItem === dataValue);
    value.value.splice(start, 1);
  }
}
</script>
