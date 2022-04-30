---
title: Tables
---

# {{ $frontmatter.title }}

Documentation and examples for opt-in styling of tables with Bootstrap.

## Overview

Using the most basic table markup, here’s how ```<boot-table>``` tables look in Bootstrap.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data">
  <boot-table-col type="index" label="#"/>
  <boot-table-col name="first" label="First"/>
  <boot-table-col name="last" label="Last"/>
  <boot-table-col name="handle" label="Handle"/>
</boot-table>
<script>
export default {
  data() {
    return {
      data: [
        { first: 'Mark', last: 'Otto', handle: '@mdo' },
        { first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { first: 'Larry the Bird', handle: '@twitter' },
      ],
    };
  },
};
</script>
```

## Variants

Use contextual classes to color tables, table rows.

<div class="example">
  <boot-table
    :data-source="[
      { class: 'Default', heading: 'Cell', theme: '' },
      { class: 'Primary', heading: 'Cell', theme: 'primary' },
      { class: 'Secondary', heading: 'Cell', theme: 'secondary' },
      { class: 'Success', heading: 'Cell', theme: 'success' },
      { class: 'Danger', heading: 'Cell', theme: 'danger' },
      { class: 'Warning', heading: 'Cell', theme: 'warning' },
      { class: 'Info', heading: 'Cell', theme: 'info' },
      { class: 'Light', heading: 'Cell', theme: 'light' },
      { class: 'Dark', heading: 'Cell', theme: 'dark' },
    ]"
    row-theme-field="theme"
  >
    <boot-table-col name="class" label="Class"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
  </boot-table>
</div>

```html
<!-- On tables -->
<table :data="data" theme="primary">...</table>
<table :data="data" theme="secondary">...</table>
<table :data="data" theme="success">...</table>
<table :data="data" theme="danger">...</table>
<table :data="data" theme="warning">...</table>
<table :data="data" theme="info">...</table>
<table :data="data" theme="light">...</table>
<table :data="data" theme="dark">...</table>
```

```html
<!-- On rows -->
<table :data="data" row-theme-field="theme">
  <boot-table-col name="class" label="Class"/>
  <boot-table-col name="heading" label="Heading"/>
  <boot-table-col name="heading" label="Heading"/>
</table>
<script>
export default {
  data() {
    return {
      data: [
        { class: 'Default', heading: 'Cell', theme: '' },
        { class: 'Primary', heading: 'Cell', theme: 'primary' },
        { class: 'Secondary', heading: 'Cell', theme: 'secondary' },
        { class: 'Success', heading: 'Cell', theme: 'success' },
        { class: 'Danger', heading: 'Cell', theme: 'danger' },
        { class: 'Warning', heading: 'Cell', theme: 'warning' },
        { class: 'Info', heading: 'Cell', theme: 'info' },
        { class: 'Light', heading: 'Cell', theme: 'light' },
        { class: 'Dark', heading: 'Cell', theme: 'dark' },
      ],
    };
  },
};
</script>
```

## Accented tables

### Striped rows

Use ```striped``` boolean attribute to add zebra-striping to any table row within the ```<boot-table-body>```.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    striped
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" striped>
  ...
</boot-table>
```

These classes can also be added to table variants:

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    theme="primary"
    striped
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<table theme="primary" striped>
  ...
</table>
```

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    theme="success"
    striped
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<table theme="success" striped>
  ...
</table>
```

### Hoverable rows

Use ```hover``` boolean attribute to add zebra-striping to any table row within the ```<boot-table-body>```.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    hover
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" hover>
  ...
</boot-table>
```

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    theme="dark"
    hover
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" theme="dark" hover>
  ...
</boot-table>
```

These hoverable rows can also be combined with the striped variant:

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    striped
    hover
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" striped hover>
  ...
</boot-table>
```

## Table borders

### Bordered tables

Add ```bordered``` boolean attribute for borders on all sides of the table and cells.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    bordered
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" bordered>
  ...
</boot-table>
```

```border-theme``` attribute can be added to change colors:

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    bordered
    border-theme="primary"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" bordered border-theme="primary">
  ...
</boot-table>
```

### Tables without borders

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    borderless
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" borderless>
  ...
</boot-table>
```

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    theme="dark"
    borderless
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" theme="dark" borderless>
  ...
</boot-table>
```

## Small tables

Add ```size="sm"``` to make any ```<boot-table>``` more compact by cutting all cell padding in half.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    size="sm"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" size="sm">
  ...
</boot-table>
```

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    theme="dark"
    size="sm"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" theme="dark" size="sm">
  ...
</boot-table>
```

## Anatomy

### Table head

Similar to tables and dark tables, use the modifier header theme ```light``` or ```dark``` to make ```<boot-table-head>```s appear light or dark gray.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    head-theme="light"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" head-theme="light">
  ...
</boot-table>
```

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    head-theme="dark"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" head-theme="dark">
  ...
</boot-table>
```

### Captions

A ```<caption>``` like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    caption="List of users"
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" caption="List of users">
  ...
</boot-table>
```

You can also put the ```<caption>``` on the top of the table with ```caption-top``` boolean attribute.

<div class="example">
  <boot-table
    :data-source="[
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry the Bird', handle: '@twitter' },
    ]"
    caption="List of users"
    caption-top
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="first" label="First"/>
    <boot-table-col name="last" label="Last"/>
    <boot-table-col name="handle" label="Handle"/>
  </boot-table>
</div>

```html
<boot-table :data="data" caption="List of users" caption-top>
  ...
</boot-table>
```

## Responsive tables

Across every breakpoint, use ```responsive``` for horizontally scrolling tables.

<div class="example">
  <boot-table
    :data-source="[
      { heading: 'Cell' },
      { heading: 'Cell' },
      { heading: 'Cell' },
    ]"
    responsive
  >
    <boot-table-col type="index" label="#"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
    <boot-table-col name="heading" label="Heading"/>
  </boot-table>
</div>

```html
<boot-table :data="data" responsive>
  ...
</boot-table>
```
