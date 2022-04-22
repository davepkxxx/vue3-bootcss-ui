<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <slot name="brand"/>
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <slot/>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BootNavbar',
};
</script>
