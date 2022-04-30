---
title: Dropdowns
---

# {{ $frontmatter.title }}

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

## Examples

### Single button

<div class="example">
  <boot-dropdown theme="secondary">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown theme="secondary">
  Dropdown button
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

The best part is you can do this with any button variant, too:

<div class="example">
  <boot-dropdown theme="primary">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="secondary">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="success">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="info">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="warning">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="danger">
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<!-- Example single danger button -->
<boot-dropdown theme="danger">
  Dropdown button
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of ```toggle-split``` boolean attribute for proper spacing around the dropdown caret.


<div class="example">
  <boot-dropdown theme="primary" toggle-split>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="secondary" toggle-split>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="success" toggle-split>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="info" toggle-split>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="warning" toggle-split>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="danger" toggle-split>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<!-- Example split danger button -->
<boot-dropdown theme="danger" toggle-split>
  Dropdown button
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

<div class="example">
  <boot-dropdown theme="secondary" size="lg">
    Large button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="secondary" size="lg">
    Large split button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<!-- Large button groups (default and split) -->
<boot-dropdown theme="secondary" size="lg">
  Large button
  <template v-slot:menu>
    <boot-dropdown-menu>
    ...
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
<boot-dropdown theme="secondary" size="lg">
  Large split button
  <template v-slot:menu>
    <boot-dropdown-menu>
    ...
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

<div class="example">
  <boot-dropdown theme="secondary" size="sm">
    Large button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown theme="secondary" size="sm">
    Large split button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown theme="secondary" size="sm">
  Small button
  <template v-slot:menu>
    <boot-dropdown-menu>
    ...
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
<boot-dropdown theme="secondary" size="sm">
  Small split button
  <template v-slot:menu>
    <boot-dropdown-menu>
    ...
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by adding ```dark-menu``` boolean attribute. No changes are required to the dropdown items.

<div class="example">
  <boot-dropdown theme="secondary" dark-menu>
    Dropdown button
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#" active>Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown theme="secondary" dark-menu>
  Dropdown button
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#" active>Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

And putting it to use in a navbar:

<div class="example">
  <boot-navbar theme="dark" bg="dark" size="lg">
    <template v-slot:brand>
      <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
    </template>
    <boot-nav-item>
      <boot-dropdown dark-menu button-class="nav-link">
        Dropdown
        <template v-slot:menu>
          <boot-dropdown-menu>
            <boot-dropdown-item link="#">Action</boot-dropdown-item>
            <boot-dropdown-item link="#">Another action</boot-dropdown-item>
            <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
          </boot-dropdown-menu>
        </template>
      </boot-dropdown>
    </boot-nav-item>
  </boot-navbar>
</div>

```html
<boot-navbar theme="dark" bg="dark" size="lg">
  <template v-slot:brand>
    <boot-navbar-brand link="#">Navbar</boot-navbar-brand>
    </boot-dropdown-menu>
  </template>
  <boot-nav-item>
    <boot-dropdown dark-menu button-class="nav-link">
      Dropdown
      <template v-slot:menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Action</boot-dropdown-item>
          <boot-dropdown-item link="#">Another action</boot-dropdown-item>
          <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-dropdown>
  </boot-nav-item>
</boot-navbar>
```

## Directions

### Dropup

Trigger dropdown menus above elements by adding ```dropup``` to the ```direction``` attribute.

<div class="example">
  <boot-dropdown direction="dropup" placement="top-start" theme="secondary">
    Dropup
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown direction="dropup" placement="top-start" theme="secondary" toggle-split>
    Split dropup
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown direction="dropup" placement="top-start" theme="secondary">
  Dropup
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
<boot-dropdown direction="dropup" placement="top-start" theme="secondary" toggle-split>
  Split dropup
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

### Dropright

Trigger dropdown menus at the right of the elements by adding ```dropend``` to the ```direction``` attribute.

<div class="example">
  <boot-dropdown direction="dropright" placement="right-start" theme="secondary">
    Dropright
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown direction="dropright" placement="right-start" theme="secondary" toggle-split>
    Split dropright
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown direction="dropright" placement="right-start" theme="secondary">
  Dropright
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
<boot-dropdown direction="dropright" placement="right-start" theme="secondary" toggle-split>
  Split dropright
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

### Dropleft

Trigger dropdown menus at the right of the elements by adding ```dropstart``` to the ```direction``` attribute.

<div class="example">
  <boot-dropdown direction="dropstart" placement="left-start" theme="secondary">
    Dropstart
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
  <boot-dropdown direction="dropstart" placement="left-start" theme="secondary" toggle-split>
    Split dropstart
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Action</boot-dropdown-item>
        <boot-dropdown-item link="#">Another action</boot-dropdown-item>
        <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
        <boot-dropdown-divider/>
        <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown direction="dropstart" placement="left-start" theme="secondary">
  Dropstart
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
<boot-dropdown direction="dropstart" placement="left-start" theme="secondary" toggle-split>
  Split dropstart
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item link="#">Action</boot-dropdown-item>
      <boot-dropdown-item link="#">Another action</boot-dropdown-item>
      <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
      <boot-dropdown-divider/>
      <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

## Menu items

You can use ```<a>``` or ```<button>``` elements as dropdown items.

<div class="example">
  <boot-dropdown theme="secondary">
    Dropdown
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item>Action</boot-dropdown-item>
        <boot-dropdown-item>Another action</boot-dropdown-item>
        <boot-dropdown-item>Something else here</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown theme="secondary">
  Dropdown
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item>Action</boot-dropdown-item>
      <boot-dropdown-item>Another action</boot-dropdown-item>
      <boot-dropdown-item>Something else here</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

### Active

Add ```active``` boolean attribute to items in the dropdown to style them as active.

<div class="example">
  <boot-dropdown-menu>
    <boot-dropdown-item link="#">Regular link</boot-dropdown-item>
    <boot-dropdown-item link="#" active>Active link</boot-dropdown-item>
    <boot-dropdown-item link="#">Another link</boot-dropdown-item>
  </boot-dropdown-menu>
</div>

```html
<boot-dropdown-menu>
  <boot-dropdown-item link="#">Regular link</boot-dropdown-item>
  <boot-dropdown-item link="#" active>Active link</boot-dropdown-item>
  <boot-dropdown-item link="#">Another link</boot-dropdown-item>
</boot-dropdown-menu>
```

### Disabled

Add ```disabled``` boolean attribute to items in the dropdown to style them as disabled.

<div class="example">
  <boot-dropdown-menu>
    <boot-dropdown-item link="#">Regular link</boot-dropdown-item>
    <boot-dropdown-item link="#" disabled>Disabled link</boot-dropdown-item>
    <boot-dropdown-item link="#">Another link</boot-dropdown-item>
  </boot-dropdown-menu>
</div>

```html
<boot-dropdown-menu>
  <boot-dropdown-item link="#">Regular link</boot-dropdown-item>
  <boot-dropdown-item link="#" disabled>Disabled link</boot-dropdown-item>
  <boot-dropdown-item link="#">Another link</boot-dropdown-item>
</boot-dropdown-menu>
```

## Menu alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the ```placement``` attribute.

Add ```bottom-end``` to the ```placement``` attribute to right align the dropdown menu.

<div class="example">
  <boot-dropdown placement="bottom-end" theme="secondary">
    Right-aligned menu example
    <template v-slot:menu>
      <boot-dropdown-menu>
        <boot-dropdown-item>Action</boot-dropdown-item>
        <boot-dropdown-item>Another action</boot-dropdown-item>
        <boot-dropdown-item>Something else here</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</div>

```html
<boot-dropdown placement="bottom-end" theme="secondary">
  Right-aligned menu example
  <template v-slot:menu>
    <boot-dropdown-menu>
      <boot-dropdown-item>Action</boot-dropdown-item>
      <boot-dropdown-item>Another action</boot-dropdown-item>
      <boot-dropdown-item>Something else here</boot-dropdown-item>
    </boot-dropdown-menu>
  </template>
</boot-dropdown>
```

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

<div class="example">
  <boot-dropdown-menu>
    <boot-dropdown-header>Dropdown header</boot-dropdown-header>
    <boot-dropdown-item link="#">Action</boot-dropdown-item>
    <boot-dropdown-item link="#">Another action</boot-dropdown-item>
  </boot-dropdown-menu>
</div>

```html
<boot-dropdown-menu>
  <boot-dropdown-header>Dropdown header</boot-dropdown-header>
  <boot-dropdown-item link="#">Action</boot-dropdown-item>
  <boot-dropdown-item link="#">Another action</boot-dropdown-item>
</boot-dropdown-menu>
```

### Dividers
Separate groups of related menu items with a divider.

<div class="example">
  <boot-dropdown-menu>
    <boot-dropdown-item link="#">Action</boot-dropdown-item>
    <boot-dropdown-item link="#">Another action</boot-dropdown-item>
    <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
    <boot-dropdown-divider/>
    <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
  </boot-dropdown-menu>
</div>

```html
<boot-dropdown-menu>
  <boot-dropdown-item link="#">Action</boot-dropdown-item>
  <boot-dropdown-item link="#">Another action</boot-dropdown-item>
  <boot-dropdown-item link="#">Something else here</boot-dropdown-item>
  <boot-dropdown-divider/>
  <boot-dropdown-item link="#">Separated link</boot-dropdown-item>
</boot-dropdown-menu>
```

### Text

Place any freeform text within a dropdown menu with text. Note that you’ll likely need additional sizing styles to constrain the menu width.

<div class="example">
  <boot-dropdown-menu class="p-4 text-muted" style="max-width: 200px;">
    <p>
      Some example text that's free-flowing within the dropdown menu.
    </p>
    <p class="mb-0">
      And this is more example text.
    </p>
  </boot-dropdown-menu>
</div>

```html
<boot-dropdown-menu class="p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</boot-dropdown-menu>
```
