<template>
  <input
    v-if="check"
    ref="checkRef"
    :type="radio ? 'radio' : 'checkbox'"
    class="btn-check"
    :checked="checked"
    :name="radio"
  >
  <component
    :is="link ? 'a' : 'button'"
    :type="link ? undefined : type"
    :href="link"
    :disabled="disabled"
    class="btn"
    :class="[
      theme ? `btn${outline ? '-outline' : ''}-${theme}` : '',
      size ? `btn-${size}` : '',
      disabled ? 'disabled' : '',
      active ? 'active' : '',
    ]"
    :aria-pressed="!link && active ? 'true' : undefined"
    :aria-current="link && active ? 'true' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="link && disabled ? '-1' : tabindex"
    v-bind="$attrs"
    @click="onButtonClick"
  >
    <slot/>
  </component>
</template>
<script lang="ts">
export default {
  name: 'BootButton',
};
</script>
<script lang="ts" setup>
import { Ref, ref, unref } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: string;
    link?: string;
    active?: boolean;
    disabled?: boolean;
    theme?: string;
    outline?: boolean;
    size?: string;
    tabindex?: string;
    check?: boolean;
    checked?: boolean;
    radio?: string;
  }>(),
  {
    type: 'button',
  },
);

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const checkRef: Ref<HTMLInputElement | undefined> = ref();

function onButtonClick() {
  const check = unref(checkRef);
  if (props.check && check) {
    check.checked = props.radio ? true : !check.checked;
  }
  emit('click');
}
</script>
<style>
.btn-check:focus + .btn,
.btn:focus {
  box-shadow: none;
}
</style>
