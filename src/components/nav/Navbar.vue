<template>
  <nav
    class="navbar"
    :class="[
      `navbar-expand-${size}`,
      `navbar-${theme}`,
      bg ? `bg-${bg}` : '',
    ]"
  >
    <div class="container-fluid">
      <slot name="brand"/>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav me-auto">
          <slot/>
        </div>
        <div class="navbar-nav">
          <slot name="right"/>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  name: 'BootNavbar',
};
</script>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: string;
    theme?: string,
    bg?: string,
  }>(),
  {
    size: 'md',
    theme: 'light',
  },
);
</script>
