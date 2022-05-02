---
title: Checks & radios
---

# {{ $frontmatter.title }}

Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.

## Checks

<div class="example">
  <boot-check-group
    :data-source="[
      { value: 'flexCheckDefault', label: 'Default checkbox' },
      { value: 'flexCheckChecked', label: 'Checked checkbox' },
    ]"
    label-field="label"
    value-field="value"
    :default-value="['flexCheckChecked']"
  />
</div>

```html
<boot-check-group
  :data-source="[
    { value: 'flexCheckDefault', label: 'Default checkbox' },
    { value: 'flexCheckChecked', label: 'Checked checkbox' },
  ]"
  label-field="label"
  value-field="value"
  :default-value="['flexCheckChecked']"
/>
```

## Disabled

Add the ```disabled``` attribute and the associated ```<label>```s attribute is automatically styled to match with a lighter color to help indicate the input’s state.

<div class="example">
  <boot-check-group
    :data-source="[
      { value: 'flexCheckDisabled', label: 'Disabled checkbox' },
      { value: 'flexCheckCheckedDisabled', label: 'Disabled checked checkbox' },
    ]"
    label-field="label"
    value-field="value"
    :default-value="['flexCheckCheckedDisabled']"
    disabled
  />
</div>

```html
<boot-check-group
  :data-source="[
    { value: 'flexCheckDisabled', label: 'Disabled checkbox', disabled: true },
    { value: 'flexCheckCheckedDisabled', label: 'Disabled checked checkbox', disabled: true },
  ]"
  disabled-field="disabled"
  label-field="label"
  value-field="value"
    :default-value="['flexCheckCheckedDisabled']"
/>
```

## Radios

<div class="example">
  <boot-check-group
    :data-source="[
      { value: 'flexRadioDefault1', label: 'Default radio' },
      { value: 'flexRadioDefault2', label: 'Default checked radio' },
    ]"
    label-field="label"
    value-field="value"
    default-value="flexRadioDefault2"
    single
  />
</div>

```html
<boot-check-group
  :data-source="[
    { value: 'flexRadioDefault1', label: 'Default radio' },
    { value: 'flexRadioDefault2', label: 'Default checked radio' },
  ]"
  label-field="label"
  value-field="value"
  :default-value="flexRadioDefault2"
  single
/>
```

## Switches

A switch has the markup of a custom checkbox but uses the ```switches``` boolean attribute to render a toggle switch. Switches also support the ```disabled``` attribute.

<div class="example">
  <boot-check-group
    :data-source="[
      { value: 'flexSwitchCheckDefault', label: 'Default witch checkbox input', disabled: false },
      { value: 'flexSwitchCheckChecked', label: 'Default switch checkbox input', disabled: false },
      { value: 'flexSwitchCheckDisabled', label: 'Disabled switch checkbox input', disabled: true },
      { value: 'flexSwitchCheckCheckedDisabled', label: 'Disabled checked switch checkbox input', disabled: true },
    ]"
    disabled-field="disabled"
    label-field="label"
    value-field="value"
    :default-value="['flexSwitchCheckChecked', 'flexSwitchCheckCheckedDisabled']"
    switches
  />
</div>

```html
<boot-check-group
  :data-source="[
    { value: 'flexSwitchCheckDefault', label: 'Default witch checkbox input', disabled: false },
    { value: 'flexSwitchCheckChecked', label: 'Default switch checkbox input', disabled: false },
    { value: 'flexSwitchCheckDisabled', label: 'Disabled switch checkbox input', disabled: true },
    { value: 'flexSwitchCheckCheckedDisabled', label: 'Disabled checked switch checkbox input', disabled: true },
  ]"
  disabled-field="disabled"
  label-field="label"
  value-field="value"
  default-value="['flexSwitchCheckChecked', 'flexSwitchCheckCheckedDisabled']"
  switches
/>
```

## Default (stacked)

By default, any number of checkboxes that are immediate sibling will be vertically stacked.

<div class="example">
  <div>
    <boot-check-group
      :data-source="[
        { value: 'defaultCheck1', label: 'Default checkbox', disabled: false },
        { value: 'defaultCheck2', label: 'Disabled checkbox', disabled: true },
      ]"
      disabled-field="disabled"
      label-field="label"
      value-field="value"
    />
  </div>
</div>

```html
<div>
  <boot-check-group
    :data-source="[
      { value: 'defaultCheck1', label: 'Default checkbox', disabled: false },
      { value: 'defaultCheck2', label: 'Disabled checkbox', disabled: true },
    ]"
    disabled-field="disabled"
    label-field="label"
    value-field="value"
  />
</div>
```

<div class="example">
  <boot-check-group
    :data-source="[
      { value: 'exampleRadios1', label: 'Default radio', disabled: false },
      { value: 'exampleRadios2', label: 'Second default radio', disabled: false },
      { value: 'exampleRadios3', label: 'Disabled radio', disabled: true },
    ]"
    disabled-field="disabled"
    label-field="label"
    value-field="value"
    default-value="exampleRadios1"
    single
  />
</div>

```html
<boot-check-group
  :data-source="[
    { value: 'exampleRadios1', label: 'Default radio', disabled: false },
    { value: 'exampleRadios2', label: 'Second default radio', disabled: false },
    { value: 'exampleRadios3', label: 'Disabled radio', disabled: true },
  ]"
  disabled-field="disabled"
  label-field="label"
  value-field="value"
  default-value="exampleRadios1"
  single
/>
```

## Inline

Group checkboxes on the same horizontal row by adding ```inline``` boolean attribute.

<div class="example">
  <div>
    <boot-check-group
      :data-source="[
        { value: 'inlineCheckbox1', label: '1', disabled: false },
        { value: 'inlineCheckbox2', label: '2', disabled: false },
        { value: 'inlineCheckbox3', label: '3 (disabled)', disabled: true },
      ]"
      disabled-field="disabled"
      label-field="label"
      value-field="value"
      inline
    />
  </div>
</div>

```html
<div>
  <boot-check-group
    :data-source="[
      { value: 'inlineCheckbox1', label: '1', disabled: false },
      { value: 'inlineCheckbox2', label: '2', disabled: false },
      { value: 'inlineCheckbox3', label: '3 (disabled)', disabled: true },
    ]"
    disabled-field="disabled"
    label-field="label"
    value-field="value"
    inline
  />
</div>
```

<div class="example">
  <boot-check-group
    :data-source="[
      { value: 'inlineCheckbox1', label: '1', disabled: false },
      { value: 'inlineCheckbox2', label: '2', disabled: false },
      { value: 'inlineCheckbox3', label: '3 (disabled)', disabled: true },
    ]"
    disabled-field="disabled"
    label-field="label"
    value-field="value"
    single
    inline
  />
</div>

```html
<boot-check-group
  :data-source="[
    { value: 'inlineCheckbox1', label: '1', disabled: false },
    { value: 'inlineCheckbox2', label: '2', disabled: false },
    { value: 'inlineCheckbox3', label: '3 (disabled)', disabled: true },
  ]"
  disabled-field="disabled"
  label-field="label"
  value-field="value"
  single
  inline
/>
```

## Without labels

<div class="example">
  <boot-check id="checkboxNoLabel"/>
  <boot-check id="radioNoLabel1" single/>
</div>

```html
<boot-check id="checkboxNoLabel"/>
<boot-check id="radioNoLabel1" single/>
```
