<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        :aria-expanded="internalCollapsed ? 'false' : 'true'"
        @click="internalCollapsed = !internalCollapsed"
      >
        <slot name="header"/>
      </button>
    </h2>
    <div class="accordion-collapse collapse" :class="{ show: !internalCollapsed }">
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
import { ref } from 'vue';

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});

const internalCollapsed = ref(props.collapsed);
</script>
