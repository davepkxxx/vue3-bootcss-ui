---
title: Button Group
---

# {{ $frontmatter.title }}

Group a series of buttons together on a single line or stack them in a vertical column.

## Basic example

Wrap a series of buttons with ```<boot-button>``` in ```<boot-button-group>```.

<div class="example">
  <boot-button-group aria-label="Basic example">
    <boot-button theme="primary">Left</boot-button>
    <boot-button theme="primary">Middle</boot-button>
    <boot-button theme="primary">Right</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group aria-label="Basic example">
  <boot-button theme="primary">Left</boot-button>
  <boot-button theme="primary">Middle</boot-button>
  <boot-button theme="primary">Right</boot-button>
</boot-button-group>
```

These classes can also be added to groups of links.

<div class="example">
  <boot-button-group>
    <boot-button theme="primary" link="#" active>Left</boot-button>
    <boot-button theme="primary" link="#">Middle</boot-button>
    <boot-button theme="primary" link="#">Right</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group>
  <boot-button theme="primary" link="#" active>Left</boot-button>
  <boot-button theme="primary" link="#">Middle</boot-button>
  <boot-button theme="primary" link="#">Right</boot-button>
</boot-button-group>
```

## Mixed styles

<div class="example">
  <boot-button-group aria-label="Basic mixed styles example">
    <boot-button theme="danger">Left</boot-button>
    <boot-button theme="warning">Middle</boot-button>
    <boot-button theme="success">Right</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group aria-label="Basic mixed styles example">
  <boot-button theme="danger">Left</boot-button>
  <boot-button theme="warning">Middle</boot-button>
  <boot-button theme="success">Right</boot-button>
</boot-button-group>
```

## Outlined styles

<div class="example">
  <boot-button-group aria-label="Basic outlined example">
    <boot-button theme="primary" outline>Left</boot-button>
    <boot-button theme="primary" outline>Middle</boot-button>
    <boot-button theme="primary" outline>Right</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group aria-label="Basic outlined example">
  <boot-button theme="primary" outline>Left</boot-button>
  <boot-button theme="primary" outline>Middle</boot-button>
  <boot-button theme="primary" outline>Right</boot-button>
</boot-button-group>
```

## Checkbox and radio button groups

Combine button-like checkbox and radio toggle buttons into a seamless looking button group.

<div class="example">
  <boot-button-group aria-label="Basic checkbox toggle button group">
    <boot-button theme="primary" outline check>Checkbox 1</boot-button>
    <boot-button theme="primary" outline check>Checkbox 2</boot-button>
    <boot-button theme="primary" outline check>Checkbox 3</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group aria-label="Basic checkbox toggle button group">
  <boot-button theme="primary" outline check>Checkbox 1</boot-button>
  <boot-button theme="primary" outline check>Checkbox 2</boot-button>
  <boot-button theme="primary" outline check>Checkbox 3</boot-button>
</boot-button-group>
```

<div class="example">
  <boot-button-group aria-label="Basic radio toggle button group">
    <boot-button theme="primary" outline check radio="btnradio">Radio 1</boot-button>
    <boot-button theme="primary" outline check radio="btnradio">Radio 2</boot-button>
    <boot-button theme="primary" outline check radio="btnradio">Radio 3</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group aria-label="Basic radio toggle button group">
  <boot-button theme="primary" outline check radio="btnradio">Radio 1</boot-button>
  <boot-button theme="primary" outline check radio="btnradio">Radio 2</boot-button>
  <boot-button theme="primary" outline check radio="btnradio">Radio 3</boot-button>
</boot-button-group>
```

## Button toolbar

Combine sets of button groups into button toolbars for more complex components.

<div class="example">
  <boot-button-toolbar aria-label="Toolbar with button groups">
    <boot-button-group class="me-2" aria-label="First group">
      <boot-button theme="primary">1</boot-button>
      <boot-button theme="primary">2</boot-button>
      <boot-button theme="primary">3</boot-button>
      <boot-button theme="primary">4</boot-button>
    </boot-button-group>
    <boot-button-group class="me-2" aria-label="Second group">
      <boot-button theme="secondary">5</boot-button>
      <boot-button theme="secondary">6</boot-button>
      <boot-button theme="secondary">7</boot-button>
    </boot-button-group>
    <boot-button-group aria-label="Third group">
      <boot-button theme="info">8</boot-button>
    </boot-button-group>
  </boot-button-toolbar>
</div>

```html
<boot-button-toolbar aria-label="Toolbar with button groups">
  <boot-button-group class="me-2" aria-label="First group">
    <boot-button theme="primary">1</boot-button>
    <boot-button theme="primary">2</boot-button>
    <boot-button theme="primary">3</boot-button>
    <boot-button theme="primary">4</boot-button>
  </boot-button-group>
  <boot-button-group class="me-2" aria-label="Second group">
    <boot-button theme="secondary">5</boot-button>
    <boot-button theme="secondary">6</boot-button>
    <boot-button theme="secondary">7</boot-button>
  </boot-button-group>
  <boot-button-group aria-label="Third group">
    <boot-button theme="info">8</boot-button>
  </boot-button-group>
</boot-button-toolbar>
```

## Nesting

Place a ```<boot-dropdown>``` within another ```<boot-button-group>``` when you want dropdown menus mixed with a series of buttons.

<div class="example">
  <boot-button-group aria-label="Button group with nested dropdown">
    <boot-button theme="primary">1</boot-button>
    <boot-button theme="primary">2</boot-button>
    <boot-dropdown theme="primary" group>
      Dropdown
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-dropdown>
  </boot-button-group>
</div>

```html
<boot-button-group aria-label="Button group with nested dropdown">
  <boot-button theme="primary">1</boot-button>
  <boot-button theme="primary">2</boot-button>

  <boot-dropdown theme="primary" group>
    Dropdown
    <template #menu>
      <boot-dropdown-menu>
        <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
        <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
      </boot-dropdown-menu>
    </template>
  </boot-dropdown>
</boot-button-group>
```

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

<div class="example">
  <boot-button-group aria-label="Vertical button group" vertical>
    <boot-button theme="dark">Button</boot-button>
    <boot-button theme="dark">Button</boot-button>
    <boot-button theme="dark">Button</boot-button>
    <boot-button theme="dark">Button</boot-button>
    <boot-button theme="dark">Button</boot-button>
    <boot-button theme="dark">Button</boot-button>
  </boot-button-group>
</div>

<div class="example">
  <boot-button-group aria-label="Vertical button group" vertical>
    <boot-button theme="primary">Button</boot-button>
    <boot-button theme="primary">Button</boot-button>
    <boot-dropdown theme="primary" group>
      Dropdown
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-dropdown>
    <boot-button theme="primary">Button</boot-button>
    <boot-button theme="primary">Button</boot-button>
    <boot-dropdown theme="primary" group>
      Dropdown
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-dropdown>
    <boot-dropdown theme="primary" group>
      Dropdown
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-dropdown>
    <boot-dropdown theme="primary" group>
      Dropdown
      <template #menu>
        <boot-dropdown-menu>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
          <boot-dropdown-item link="#">Dropdown link</boot-dropdown-item>
        </boot-dropdown-menu>
      </template>
    </boot-dropdown>
  </boot-button-group>
</div>

<div class="example">
  <boot-button-group aria-label="Vertical radio toggle button group" vertical>
    <boot-button theme="danger" outline check radio="vbtn-radio">Radio 1</boot-button>
    <boot-button theme="danger" outline check radio="vbtn-radio">Radio 2</boot-button>
    <boot-button theme="danger" outline check radio="vbtn-radio">Radio 3</boot-button>
  </boot-button-group>
</div>

```html
<boot-button-group vertical>
  ...
</boot-button-group>
```
