<template>
  <div class="accordion" :class="{ 'accordion-flush': flush }">
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
import { useSync } from '../../utils/use';

const props = withDefaults(
  defineProps<{
    activeNames?: (number | string)[];
    multi?: boolean;
    flush?: boolean;
  }>(),
  {
    activeNames: () => [],
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
