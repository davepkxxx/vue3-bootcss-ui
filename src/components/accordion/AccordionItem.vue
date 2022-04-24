<template>
  <div class="accordion-item">
    <span class="accordion-header">
      <button
        class="accordion-button"
        :class="{ collapsed: !expanded }"
        type="button"
        :aria-expanded="expanded ? 'true' : 'false'"
        @click="toggle"
      >
        <slot name="header"/>
      </button>
    </span>
    <div class="accordion-collapse collapse" :class="{ show: expanded }">
      <div class="accordion-body">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootAccordionItem',
};
</script>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { inject, Ref } from 'vue';
import { activeNamesKey, multiKey } from './model';

const props = defineProps<{
  name: string | number;
}>();

const multi = inject(multiKey) as Ref<boolean>;
const activeNames = inject(activeNamesKey) as Ref<(number | string)[]>;
const expanded = computed(() => activeNames.value.some((name) => name === props.name));

function toggle() {
  const index = activeNames.value.findIndex((name) => name === props.name);
  if (index > -1) {
    activeNames.value.splice(index, 1);
  } else {
    if (multi.value) {
      activeNames.value.push(props.name);
    } else {
      activeNames.value = [props.name];
    }
  }
}

defineExpose({
  expanded,
  toggle,
});
</script>
