<template>
  <component :is="root" :class="direction === 'dropstart' ? '' : direction">
    <div v-if="toggleSplit && direction === 'dropstart'" class="btn-group dropstart" role="group">
      <Button
        :disabled="disabled"
        :theme="theme"
        :size="size"
        class="dropdown-toggle dropdown-toggle-split"
        :class="mainClass"
        @click="$emit('toggle')"
      />
    </div>
    <Button
      :disabled="disabled"
      :theme="theme"
      :size="size"
      class="dropdown-toggle"
      :class="mainClass"
      @click="$emit(toggleSplit ? 'click' : 'toggle')"
    >
      <slot/>
    </Button>
    <Button
      v-if="toggleSplit && direction !== 'dropstart'"
      :disabled="disabled"
      :theme="theme"
      :size="size"
      class="dropdown-toggle dropdown-toggle-split"
      :class="mainClass"
      @click="$emit('toggle')"
    />
  </component>
</template>
<script lang="ts">
export default {
  name: 'DropdownButton',
};
</script>
<script lang="ts" setup>
import Button from '../button/Button.vue';
import ButtonGroup from '../button/ButtonGroup.vue';

const props = withDefaults(
  defineProps<{
    direction?: string;
    toggleSplit?: boolean;
    disabled?: boolean;
    theme?: string;
    mainClass?: string;
    size?: string;
    group?: boolean;
  }>(),
  {
    direction: 'dropdown',
    mainClass: '',
  },
);

defineEmits<{
  (e: 'click'): void;
  (e: 'toggle'): void;
}>();

const root = props.toggleSplit || props.group ? ButtonGroup : 'div';
</script>
