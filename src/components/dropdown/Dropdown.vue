<template>
  <div
    ref="triggerEl"
    v-click-outside="() => expanded = false"
    class="btn-group"
    :class="toggleSplit && direction === 'dropstart' ? '' : direction"
  >
    <div
      v-if="toggleSplit && direction === 'dropstart'"
      class="btn-group dropstart" role="group"
    >
      <Button
        :theme="theme"
        :size="size"
        :aria-expanded="expanded"
        class="dropdown-toggle dropdown-toggle-split"
        :class="buttonClass"
        @click="expanded = !expanded"
      />
    </div>
    <Button
      :theme="theme"
      :size="size"
      :class="[
        toggleSplit ? '' : 'dropdown-toggle',
        buttonClass,
      ]"
      v-bind="{ 'aria-expanded': toggleSplit ? undefined : expanded }"
      @click="onClick"
    >
      <slot/>
    </Button>
    <Button
      v-if="toggleSplit && direction !== 'dropstart'"
      :theme="theme"
      :size="size"
      :aria-expanded="expanded"
      class="dropdown-toggle dropdown-toggle-split"
      :class="buttonClass"
      @click="expanded = !expanded"
    />
    <teleport to="body">
      <div v-show="expanded" ref="menuEl" @click="expanded = false">
        <slot name="menu"/>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BootDropdown',
};
</script>
<script lang="ts" setup>
import { createPopper, Instance, Placement } from '@popperjs/core';
import { onMounted, Ref, ref, watch } from 'vue';
import Button from '../button/Button.vue';
import vClickOutside from '../../directives/ClickOutside';

const props = withDefaults(
  defineProps<{
    direction?: string;
    toggleSplit?: boolean;
    disabled?: boolean;
    theme?: string;
    buttonClass?: string;
    size?: string;
    placement?: string;
    darkMenu?: boolean;
  }>(),
  {
    direction: 'dropdown',
    buttonClass: '',
    placement: 'bottom-start',
  },
);

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const triggerEl: Ref<HTMLDivElement | undefined> = ref();
const menuEl: Ref<HTMLDivElement | undefined> = ref();
const expanded = ref(false);
let popper: Instance;

onMounted(() => {
  if (triggerEl.value && menuEl.value) {
    const { placement } = props;
    popper = createPopper(triggerEl.value, menuEl.value, {
      placement: placement as Placement,
    });
  }
});

watch(expanded, () => {
  popper.update();
});

function onClick() {
  if (!props.toggleSplit) {
    expanded.value = !expanded.value;
  }
  emit('click');
}

defineExpose({
  triggerEl,
  menuEl,
  vClickOutside,
});
</script>
