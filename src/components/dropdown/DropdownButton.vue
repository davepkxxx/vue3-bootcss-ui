<template>
  <ButtonGroup v-if="toggleSplit" :class="direction === 'dropstart' ? '' : direction">
    <div v-if="direction === 'dropstart'" class="btn-group dropstart" role="group">
      <Button
        :theme="theme"
        :size="size"
        class="dropdown-toggle dropdown-toggle-split"
        :class="mainClass"
        @click="$emit('toggle')"
      />
    </div>
    <Button
      :theme="theme"
      :size="size"
      :class="mainClass"
      @click="$emit('click')"
    >
      <slot/>
    </Button>
    <Button
      v-if="toggleSplit && direction !== 'dropstart'"
      :theme="theme"
      :size="size"
      class="dropdown-toggle dropdown-toggle-split"
      :class="mainClass"
      @click="$emit('toggle')"
    />
  </ButtonGroup>
  <div v-else class="dropdown">
    <Button
      :theme="theme"
      :size="size"
      class="dropdown-toggle"
      :class="mainClass"
      @click="$emit('toggle')"
    >
      <slot/>
    </Button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DropdownButton',
};
</script>
<script lang="ts" setup>
import Button from '../button/Button.vue';
import ButtonGroup from '../button/ButtonGroup.vue';

withDefaults(
  defineProps<{
    direction?: string;
    toggleSplit?: boolean;
    disabled?: boolean;
    theme?: string;
    mainClass?: string;
    size?: string;
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
</script>
