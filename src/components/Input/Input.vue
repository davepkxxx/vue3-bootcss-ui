<template>
  <input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :multiple="multiple"
    :class="{
      'form-control': !plaintext,
      'form-control-lg': size === 'lg',
      'form-control-sm': size === 'sm',
      'form-control-plaintext': plaintext,
    }"
    v-bind="{
      'aria-disabled': disabled ? 'true' : undefined,
    }"
  >
</template>
<script lang="ts">
export default {
  name: 'BootInput',
};
</script>
<script lang="ts" setup>
import { useSync } from '../../utils/useData';

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    type?: 'date' | 'email' | 'file' | 'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    size?: 'lg' | 'sm';
    plaintext?: boolean;
  }>(),
  {
    type: 'text',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', activeNames: number | string): void;
}>();

const value = useSync('modelValue', props, emit);
</script>
