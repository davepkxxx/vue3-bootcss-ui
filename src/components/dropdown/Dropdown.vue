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
      <div v-show="expanded" ref="menuEl" :style="{ zIndex }" @click="expanded = false">
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
import { onMounted, Ref, ref, unref, watch } from 'vue';
import vClickOutside from '../../directives/ClickOutside';
import { nextZIndex } from '../../utils/style';
import Button from '../button/Button.vue';

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
const zIndex = ref(unref(expanded) ? nextZIndex() : 0);
let popper: Instance;

onMounted(() => {
  const [trigger, menu] = [unref(triggerEl), unref(menuEl)];
  if (trigger && menu) {
    const { placement } = props;
    popper = createPopper(trigger, menu, {
      placement: placement as Placement,
    });
  }
});

watch(expanded, (value) => {
  if (value) {
    popper.update();
    zIndex.value = nextZIndex();
  }
});

function onClick() {
  if (!props.toggleSplit) {
    expanded.value = !unref(expanded);
  }
  emit('click');
}

defineExpose({
  triggerEl,
  menuEl,
  vClickOutside,
});
</script>
