<template>
  <teleport to="body">
    <div v-show="popped" ref="popperRef" :style="{ zIndex }">
      <slot/>
    </div>
  </teleport>
</template>
<script lang="ts">
export default {
  name: 'BootPopper',
};
</script>
<script lang="ts" setup>
import { Modifier, OptionsGeneric } from '@popperjs/core';
import { ComponentPublicInstance, toRefs } from 'vue';
import { usePopper } from '../../utils/useData';

const props = defineProps<{
  popped?: boolean;
  referenceRef?: Element | ComponentPublicInstance;
  options?: Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;
}>();

const { options } = props;
const { popped, referenceRef } = toRefs(props);

const { popperRef, zIndex } = usePopper({ popped, referenceRef }, options);

defineExpose({
  popperRef,
  zIndex,
});
</script>
