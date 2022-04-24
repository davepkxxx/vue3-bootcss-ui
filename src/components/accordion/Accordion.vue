<template>
  <div class="accordion">
    <slot/>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootAccordion',
};
</script>
<script lang="ts" setup>
import { provide, toRefs } from 'vue';
import { activeNamesKey, multiKey } from './model';
import { useSync } from '../../utils/useData';

const props = withDefaults(
  defineProps<{
    activeNames?: (number | string)[];
    multi?: boolean;
  }>(),
  {
    activeNames: () => [],
    multi: false,
  },
);

const emit = defineEmits<{
  (e: 'update:activeNames', activeNames: (number | string)[]): void;
}>();

const activeNames = useSync('activeNames', props, emit);

provide(activeNamesKey, activeNames);
provide(multiKey, toRefs(props).multi);

defineExpose();
</script>
