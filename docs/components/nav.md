---
title: Navbar
---

# {{ $frontmatter.title }}

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

## Brand

The ```<boot-navbar-brand>``` can be applied to ```<boot-navbar>```.

### Text

Add your text within an ```<boot-navbar-brand>``` element.

<div class="example">
  <boot-navbar>
    <template v-slot:brand>
      <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
    </template>
  </boot-navbar>
  <boot-navbar>
    <template v-slot:brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
  </boot-navbar>
</div>

```html
<!-- As a link -->
<boot-navbar>
  <template v-slot:brand>
    <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
  </template>
</boot-navbar>

<!-- As a heading -->
<boot-navbar>
  <template v-slot:brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
</boot-navbar>
```

### Image

You can replace the text within the ```<boot-navbar-brand>``` with an ```<boot-nav-logo>```.

<div class="example">
  <boot-navbar>
    <template v-slot:brand link="#">
      <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
    </template>
  </boot-navbar>
</div>

```html
<boot-navbar>
  <template v-slot:brand link="#">
    <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
  </template>
</boot-navbar>
```

### Image and text

You can also make use of some additional utilities to add an image and text at the same time.

<div class="example">
  <boot-navbar>
    <template v-slot:brand link="#">
      <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
      &nbsp;Bootstrap
    </template>
  </boot-navbar>
</div>

```html
<boot-navbar>
  <template v-slot:brand link="#">
    <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
    &nbsp;Bootstrap
  </template>
</boot-navbar>
```

## Nav

Navbar navigation links build on our ```<boot-navbar>``` element.

Add the ```active``` attribute on ```<boot-nav-link>``` to indicate the current page.

<div class="example">
  <boot-navbar>
    <template v-slot:brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" :active="true">Home</boot-nav-item>
    <boot-nav-item link="#">Features</boot-nav-item>
    <boot-nav-item link="#">Pricing</boot-nav-item>
    <boot-nav-item link="#" :disabled="true">Disabled</boot-nav-item>
  </boot-navbar>
</div>

```html
<boot-navbar>
  <template v-slot:brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" :active="true">Home</boot-nav-item>
  <boot-nav-item link="#">Features</boot-nav-item>
  <boot-nav-item link="#">Pricing</boot-nav-item>
  <boot-nav-item link="#" :disabled="true">Disabled</boot-nav-item>
</boot-navbar>
```