<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <slot name="brand"/>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <slot/>
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
