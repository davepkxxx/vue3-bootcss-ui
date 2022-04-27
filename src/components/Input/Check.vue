<template>
  <input v-model="checked" type="checkbox" class="form-check-input">
  <label v-if="label" class="form-check-label">{{ label }}</label>
</template>
<script lang="ts">
export default {
  name: 'BootCheck',
};
</script>
<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | boolean;
    trueValue?: string | number | boolean;
    falseValue?: string | number | boolean;
    label?: any;
  }>(),
  {
    trueValue: true,
    falseValue: false,
  },
);
const { modelValue } = toRefs(props);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number | boolean): void;
}>();

const checked = computed({
  get: () => modelValue?.value === props.trueValue,
  set: (value) => emit('update:modelValue', value ? props.trueValue : props.falseValue),
});

defineExpose({
  checked,
});
</script>
