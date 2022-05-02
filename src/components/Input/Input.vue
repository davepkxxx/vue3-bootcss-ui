<template>
  <input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :multiple="multiple"
    :class="[
      plaintext ? 'form-control-plaintext' : 'form-control',
      size ? `form-control-${size}` : '',
    ]"
    :aria-disabled="disabled ? 'true' : undefined"
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
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    size?: string;
    plaintext?: boolean;
  }>(),
  {
    type: 'text',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: number | string): void;
}>();

const value = useSync('modelValue', props, emit);
</script>
