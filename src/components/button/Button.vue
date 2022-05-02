<template>
  <input
    v-if="check"
    ref="checkRef"
    :type="radio ? 'radio' : 'checkbox'"
    class="btn-check"
    :checked="checked"
    v-bind="{ name: radio }"
  >
  <component
    :is="link ? 'a' : 'button'"
    :disabled="disabled"
    class="btn"
    :class="[
      theme ? `btn${outline ? '-outline' : ''}-${theme}` : '',
      size ? `btn-${size}` : '',
      link && disabled ? 'disabled' : '',
      link && active ? 'active' : '',
    ]"
    v-bind="{
      type: link ? undefined : type,
      href: link,
      'aria-current': active ? 'true' : undefined,
      'aria-disabled': disabled ? 'true' : undefined,
      'tabindex': link && disabled ? '-1' : tabindex,
      ...$attrs,
    }"
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
