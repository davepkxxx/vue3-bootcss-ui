<template>
  <DropdownButton
    ref="triggerRef"
    v-click-outside="() => expanded = false"
    :direction="direction"
    :toggle-split="toggleSplit"
    :disabled="disabled"
    :theme="theme"
    :main-class="buttonClass"
    :size="size"
    @click="$emit('click')"
    @toggle="expanded = !expanded"
  >
    <slot/>
    <Popper :popped="expanded" :reference-ref="triggerRef" :options="popperOptions">
      <slot name="menu"/>
    </Popper>
  </DropdownButton>
</template>
<script lang="ts">
export default {
  name: 'BootDropdown',
};
</script>
<script lang="ts" setup>
import { Placement } from '@popperjs/core';
import { ComponentPublicInstance, Ref, ref } from 'vue';
import vClickOutside from '../../directives/ClickOutside';
import Popper from '../popper/Popper.vue';
import DropdownButton from './DropdownButton.vue';

const props = withDefaults(
  defineProps<{
    direction?: string;
    toggleSplit?: boolean;
    disabled?: boolean;
    theme?: string;
    buttonClass?: string;
    size?: string;
    placement?: string;
  }>(),
  {
    placement: 'bottom-start',
  },
);

defineEmits<{
  (e: 'click'): void;
}>();

const triggerRef = ref() as Ref<ComponentPublicInstance | undefined>;
const expanded = ref(false);
const popperOptions = { placement: props.placement as Placement };

defineExpose({
  triggerRef,
  expanded,
  vClickOutside,
  popperOptions,
});
</script>
