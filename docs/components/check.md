---
title: Checks
---

# {{ $frontmatter.title }}

Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

## Checks

<div class="example">
  <div>
    <boot-check id="flexCheckDefault" label="Default checkbox"/>
    <boot-check id="flexCheckChecked" label="Checked checkbox" :default-value="true"/>
  </div>
</div>

```html
<div>
  <boot-check id="flexCheckDefault" label="Default checkbox"/>
  <boot-check id="flexCheckChecked" label="Checked checkbox" :default-value="true"/>
</div>
```

## Disabled

Add the ```disabled``` attribute and the associated ```<label>```s attribute is automatically styled to match with a lighter color to help indicate the input’s state.

<div class="example">
  <div>
    <boot-check id="flexCheckDisabled" label="Disabled checkbox" disabled/>
    <boot-check id="flexCheckCheckedDisabled" label="Disabled checked checkbox" :default-value="true" disabled/>
  </div>
</div>

```html
<div>
  <boot-check id="flexCheckDisabled" label="Disabled checkbox" disabled/>
  <boot-check id="flexCheckCheckedDisabled" label="Disabled checked checkbox" :default-value="true" disabled/>
</div>
```

## Switches

A switch has the markup of a custom checkbox but uses the ```switches``` boolean attribute to render a toggle switch. Switches also support the ```disabled``` attribute.

<div class="example">
  <div>
    <boot-check id="flexSwitchCheckDefault" label="Default switch checkbox input" switches/>
    <boot-check id="flexSwitchCheckChecked" label="Checked switch checkbox input" :default-value="true" switches/>
    <boot-check id="flexSwitchCheckDisabled" label="Disabled switch checkbox input" switches disabled/>
    <boot-check id="flexSwitchCheckCheckedDisabled" label="Disabled checked switch checkbox input" :default-value="true" switches disabled/>
  </div>
</div>

```html
<div>
  <boot-check id="flexSwitchCheckDefault" label="Default switch checkbox input" switches/>
  <boot-check id="flexSwitchCheckChecked" label="Checked switch checkbox input" :default-value="true" switches/>
  <boot-check id="flexSwitchCheckDisabled" label="Disabled switch checkbox input" switches disabled/>
  <boot-check id="flexSwitchCheckCheckedDisabled" label="Disabled checked switch checkbox input" :default-value="true" switches disabled/>
</div>
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

## Without labels

<div class="example">
  <boot-check id="checkboxNoLabel"/>
</div>

```html
<boot-check id="checkboxNoLabel"/>
```
