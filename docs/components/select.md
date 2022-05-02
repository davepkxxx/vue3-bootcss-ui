---
title: Select
---

# {{ $frontmatter.title }}

## Default

<div class="example">
  <boot-select
    :data-source="[
      { value: '0', label: 'Open this select menu' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ]"
    label-field="label"
    value-field="value"
    default-value="0"
    aria-label="Default select example"
  />
</div>

```html
<boot-select
  :data-source="[
    { value: '0', label: 'Open this select menu' },
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ]"
  label-field="label"
  value-field="value"
  default-value="0"
  aria-label="Default select example"
/>
```

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

<div class="example">
  <boot-select
    :data-source="[
      { value: '0', label: 'Open this select menu' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ]"
    label-field="label"
    value-field="value"
    default-value="0"
    size="lg"
    aria-label=".form-select-lg example"
  />

  <boot-select
    :data-source="[
      { value: '0', label: 'Open this select menu' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ]"
    label-field="label"
    value-field="value"
    default-value="0"
    size="sm"
    aria-label=".form-select-sm example"
  />
</div>

```html
<boot-select
  :data-source="[
    { value: '0', label: 'Open this select menu' },
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ]"
  label-field="label"
  value-field="value"
  default-value="0"
  size="lg"
  aria-label=".form-select-lg example"
/>

<boot-select
  :data-source="[
    { value: '0', label: 'Open this select menu' },
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ]"
  label-field="label"
  value-field="value"
  default-value="0"
  size="sm"
  aria-label=".form-select-sm example"
/>
```

The ```multiple``` boolean attribute is also supported:

<div class="example">
  <boot-select
    :data-source="[
      { value: '0', label: 'Open this select menu' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ]"
    label-field="label"
    value-field="value"
    :default-value="[0]"
    multiple
    aria-label="multiple select example"
  />
</div>

```html
<boot-select
  :data-source="[
    { value: '0', label: 'Open this select menu' },
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ]"
  label-field="label"
  value-field="value"
  :default-value="[0]"
  multiple
  aria-label="multiple select example"
/>
```

As is the ```size``` attribute:

<div class="example">
  <boot-select
    :data-source="[
      { value: '0', label: 'Open this select menu' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ]"
    label-field="label"
    value-field="value"
    default-value="0"
    size="3"
    aria-label="size 3 select example"
  />
</div>

```html
<boot-select
  :data-source="[
    { value: '0', label: 'Open this select menu' },
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ]"
  label-field="label"
  value-field="value"
  default-value="0"
  size="3"
  aria-label="size 3 select example"
/>
```

## Disabled

Add the ```disabled``` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

<div class="example">
  <boot-select
    :data-source="[
      { value: '0', label: 'Open this select menu' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ]"
    label-field="label"
    value-field="value"
    default-value="0"
    aria-label="Disabled select example"
    disabled
  />
</div>

```html
<boot-select
  :data-source="[
    { value: '0', label: 'Open this select menu' },
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ]"
  label-field="label"
  value-field="value"
  default-value="0"
  aria-label="Disabled select example"
  disabled
/>
```

## API

### ```<boot-select>``` Props

Props of the native component are also available.

| Name | Type | Default | Description |
| - | - | - | - |
| model-value | ```any``` | | Binding value |
| default-value | ```any``` | | Default value |
| data-source | ``` Array<any>```<br>```Promsie<Array<any>>``` | ```[]``` | Component data source. If it's ```Promise```, component will automatically fetch its value. |
| label-field | ```string``` | | Label field of data items |
| value-field | ```string``` | | Value field of data items |
| multiple | ```boolean``` | | If ```true```, ```model-value``` must be an array and the component will support multiple selections. |
| size | ```'lg'```<br>```'sm'``` | | Set component to large or small. |

### ```<boot-select>``` Events

| Name | Parameters | Description |
| - | - | - |
| update:model-value | ```value: any``` | When the ```model-value``` is changed |
