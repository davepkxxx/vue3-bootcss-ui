---
title: Navbar
---

# {{ $frontmatter.title }}

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

<div class="example">
  <boot-navbar bg="light" size="lg">
    <template #brand>
      <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" active>Home</boot-nav-item>
    <boot-nav-item link="#">Link</boot-nav-item>
    <boot-nav-item-dropdown>
      Dropdown
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Action</boot-dropdown-item>
          <boot-dropdown-item link="#">Another action</boot-dropdown-item>
          <boot-dropdown-divider/>
          <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-nav-item-dropdown>
    <boot-nav-item link="#" :disabled="true">Disabled</boot-nav-item>
    <template #right>
      <form class="d-flex">
        <boot-input type="search" placeholder="Search" aria-label="Search" class="me-2"/>
        <boot-button type="submit" theme="success" outline>Search</boot-button>
      </form>
    </template>
  </boot-navbar>
</div>

```html
<boot-navbar bg="light" size="lg">
  <template #brand>
    <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" active>Home</boot-nav-item>
  <boot-nav-item link="#">Link</boot-nav-item>
  <boot-nav-item-dropdown>
    Dropdown
    <template #menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-nav-item-dropdown>
  <boot-nav-item link="#" :disabled="true">Disabled</boot-nav-item>
  <template #right>
    <form class="d-flex">
      <boot-input type="search" placeholder="Search" aria-label="Search" class="me-2"/>
      <boot-button type="submit" theme="success" outline>Search</boot-button>
    </form>
  </template>
</boot-navbar>
```

## Brand

The ```<boot-navbar-brand>``` can be applied to ```<boot-navbar>```.

### Text

Add your text within an ```<boot-navbar-brand>``` element.

<div class="example">
  <boot-navbar bg="light" size="lg">
    <template #brand>
      <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
    </template>
  </boot-navbar>
  <boot-navbar bg="light" size="lg">
    <template #brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
  </boot-navbar>
</div>

```html
<!-- As a link -->
<boot-navbar bg="light" size="lg">
  <template #brand>
    <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
  </template>
</boot-navbar>

<!-- As a heading -->
<boot-navbar bg="light" size="lg">
  <template #brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
</boot-navbar>
```

### Image

You can replace the text within the ```<boot-navbar-brand>``` with an ```<boot-nav-logo>```.

<div class="example">
  <boot-navbar bg="light" size="lg">
    <template #brand link="#">
      <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
    </template>
  </boot-navbar>
</div>

```html
<boot-navbar bg="light" size="lg">
  <template #brand link="#">
    <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
  </template>
</boot-navbar>
```

### Image and text

You can also make use of some additional utilities to add an image and text at the same time.

<div class="example">
  <boot-navbar bg="light" size="lg">
    <template #brand link="#">
      <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
      &nbsp;Bootstrap
    </template>
  </boot-navbar>
</div>

```html
<boot-navbar bg="light" size="lg">
  <template #brand link="#">
    <boot-nav-logo src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"/>
    &nbsp;Bootstrap
  </template>
</boot-navbar>
```

## Nav

Navbar navigation links build on our ```<boot-navbar>``` element.

Add the ```active``` boolean attribute on ```<boot-nav-link>``` to indicate the current page.

<div class="example">
  <boot-navbar bg="light" size="lg">
    <template #brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" active>Home</boot-nav-item>
    <boot-nav-item link="#">Features</boot-nav-item>
    <boot-nav-item link="#">Pricing</boot-nav-item>
    <boot-nav-item link="#" :disabled="true">Disabled</boot-nav-item>
  </boot-navbar>
</div>

```html
<boot-navbar bg="light" size="lg">
  <template #brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" active>Home</boot-nav-item>
  <boot-nav-item link="#">Features</boot-nav-item>
  <boot-nav-item link="#">Pricing</boot-nav-item>
  <boot-nav-item link="#" :disabled="true">Disabled</boot-nav-item>
</boot-navbar>
```

You can also use dropdowns in your navbar.

<div class="example">
  <boot-navbar bg="light" size="lg">
    <template #brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" active>Home</boot-nav-item>
    <boot-nav-item link="#">Features</boot-nav-item>
    <boot-nav-item link="#">Pricing</boot-nav-item>
    <boot-nav-item-dropdown>
      Dropdown link
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item href="#">Action</boot-dropdown-item>
          <boot-dropdown-item href="#">Another action</boot-dropdown-item>
          <boot-dropdown-item href="#">Something else here</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-nav-item-dropdown>
  </boot-navbar>
</div>

```html
<boot-navbar bg="light" size="lg">
  <template #brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" active>Home</boot-nav-item>
  <boot-nav-item link="#">Features</boot-nav-item>
  <boot-nav-item link="#">Pricing</boot-nav-item>
  <boot-nav-item-dropdown>
    Dropdown link
    <template #menu>
      <boot-dropdown-menu>
        <boot-dropdown-item href="#">Action</boot-dropdown-item>
        <boot-dropdown-item href="#">Another action</boot-dropdown-item>
        <boot-dropdown-item href="#">Something else here</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-nav-item-dropdown>
</boot-navbar>
```

## Forms

Place various form controls and components within a navbar:

<div class="example">
  <boot-navbar bg="light">
    <form class="d-flex">
      <boot-input class="me-2" type="search" placeholder="Search" aria-label="Search"/>
      <boot-button type="submit" theme="success" outline>Search</boot-button>
    </form>
  </boot-navbar>
</div>

```html
<boot-navbar bg="light">
  <form class="d-flex">
    <boot-input class="me-2" type="search" placeholder="Search" aria-label="Search"/>
    <boot-button type="submit" theme="success" outline>Search</boot-button>
  </form>
</boot-navbar>
```

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and ```color``` attribute. Choose from ```light``` for use with light background colors, or ```dark``` for dark background colors.

<div class="example">
  <boot-navbar theme="dark" bg="dark">
    <template #brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" active>Home</boot-nav-item>
    <boot-nav-item link="#">Features</boot-nav-item>
    <boot-nav-item link="#">Pricing</boot-nav-item>
    <boot-nav-item link="#">About</boot-nav-item>
  </boot-navbar>
  <boot-navbar theme="dark" bg="primary">
    <template #brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" active>Home</boot-nav-item>
    <boot-nav-item link="#">Features</boot-nav-item>
    <boot-nav-item link="#">Pricing</boot-nav-item>
    <boot-nav-item link="#">About</boot-nav-item>
  </boot-navbar>
  <boot-navbar style="background-color: #e3f2fd;">
    <template #brand>
      <boot-navbar-brand>Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item link="#" active>Home</boot-nav-item>
    <boot-nav-item link="#">Features</boot-nav-item>
    <boot-nav-item link="#">Pricing</boot-nav-item>
    <boot-nav-item link="#">About</boot-nav-item>
  </boot-navbar>
</div>

```html
<boot-navbar theme="dark" bg="dark">
  <template #brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" active>Home</boot-nav-item>
  <boot-nav-item link="#">Features</boot-nav-item>
  <boot-nav-item link="#">Pricing</boot-nav-item>
  <boot-nav-item link="#">About</boot-nav-item>
</boot-navbar>
<boot-navbar theme="dark" bg="primary">
  <template #brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" active>Home</boot-nav-item>
  <boot-nav-item link="#">Features</boot-nav-item>
  <boot-nav-item link="#">Pricing</boot-nav-item>
  <boot-nav-item link="#">About</boot-nav-item>
</boot-navbar>
<boot-navbar style="background-color: #e3f2fd;">
  <template #brand>
    <boot-navbar-brand>Navbar</boot-navbar-brand>
  </template>
  <boot-nav-item link="#" active>Home</boot-nav-item>
  <boot-nav-item link="#">Features</boot-nav-item>
  <boot-nav-item link="#">Pricing</boot-nav-item>
  <boot-nav-item link="#">About</boot-nav-item>
</boot-navbar>
```