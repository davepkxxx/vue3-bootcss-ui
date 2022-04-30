<template>
  <div class="accordion-item">
    <span class="accordion-header">
      <button
        class="accordion-button"
        :class="`${expanded ? '' : 'collapsed'} ${toggleButtonClass}`"
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
import { computed, inject, Ref, unref } from 'vue';
import { activeNamesKey, multiKey } from './model';

const props = withDefaults(
  defineProps<{
    name: string | number;
    toggleButtonClass?: string;
  }>(),
  {
    toggleButtonClass: '',
  },
);

const multi = inject(multiKey) as Ref<boolean>;
const activeNames = inject(activeNamesKey) as Ref<(number | string)[]>;
const expanded = computed(() => unref(activeNames).some((name) => name === props.name));

function toggle() {
  const index = unref(activeNames).findIndex((name) => name === props.name);
  if (index > -1) {
    unref(activeNames).splice(index, 1);
  } else {
    if (unref(multi)) {
      unref(activeNames).push(props.name);
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
