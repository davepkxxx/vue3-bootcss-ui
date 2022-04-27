<template>
  <div :class="{ 'form-check': label, 'form-switch': switches, 'form-check-inline': inline }">
    <input
      type="checkbox"
      :checked="checked === trueValue"
      :disabled="disabled"
      class="form-check-input"
      v-bind="{ role: switches ? 'switch' : undefined }"
      @change="onChange"
    >
    <label v-if="label" class="form-check-label">{{ label }}</label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootCheck',
};
</script>
<script lang="ts" setup>
import { useValue } from '../../utils/useData';

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    defaultValue?: any;
    trueValue?: any;
    falseValue?: any;
    label?: any;
    disabled?: boolean;
    switches?: boolean;
    inline?: boolean;
  }>(),
  {
    trueValue: true,
    falseValue: false,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number | boolean): void;
}>();

const checked = useValue(props, emit, props.defaultValue);

function onChange(event: Event) {
  if (event.target) {
    const target = event.target as HTMLInputElement;
    checked.value = target.checked ? props.trueValue : props.falseValue;
  }
}
</script>
