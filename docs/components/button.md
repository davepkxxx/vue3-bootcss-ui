---
title: Buttons
---

# {{ $frontmatter.title }}

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

<div class="example">
  <boot-button theme="primary">Primary</boot-button>
  <boot-button theme="secondary">Secondary</boot-button>
  <boot-button theme="success">Success</boot-button>
  <boot-button theme="danger">Danger</boot-button>
  <boot-button theme="warning">Warning</boot-button>
  <boot-button theme="info">Info</boot-button>
  <boot-button theme="light">Light</boot-button>
  <boot-button theme="dark">Dark</boot-button>
  <boot-button theme="link">Link</boot-button>
</div>

```html
<boot-button theme="primary">Primary</boot-button>
<boot-button theme="secondary">Secondary</boot-button>
<boot-button theme="success">Success</boot-button>
<boot-button theme="danger">Danger</boot-button>
<boot-button theme="warning">Warning</boot-button>
<boot-button theme="info">Info</boot-button>
<boot-button theme="light">Light</boot-button>
<boot-button theme="dark">Dark</boot-button>
<boot-button theme="link">Link</boot-button>
```

## Outline buttons

In need of a button, but not the hefty background colors they bring? Append the ```outline``` boolean attribute to remove all background images and colors on any button.

<div class="example">
  <boot-button theme="primary" outline>Primary</boot-button>
  <boot-button theme="secondary" outline>Secondary</boot-button>
  <boot-button theme="success" outline>Success</boot-button>
  <boot-button theme="danger" outline>Danger</boot-button>
  <boot-button theme="warning" outline>Warning</boot-button>
  <boot-button theme="info" outline>Info</boot-button>
  <boot-button theme="light" outline>Light</boot-button>
  <boot-button theme="dark" outline>Dark</boot-button>
</div>

```html
<boot-button theme="primary" outline>Primary</boot-button>
<boot-button theme="secondary" outline>Secondary</boot-button>
<boot-button theme="success" outline>Success</boot-button>
<boot-button theme="danger" outline>Danger</boot-button>
<boot-button theme="warning" outline>Warning</boot-button>
<boot-button theme="info" outline>Info</boot-button>
<boot-button theme="light" outline>Light</boot-button>
<boot-button theme="dark" outline>Dark</boot-button>
```

## Sizes

Fancy larger or smaller buttons? Add ```lg``` or ```sm``` to the ```size``` attribute for additional sizes.

<div class="example">
  <boot-button theme="primary" size="lg">Primary</boot-button>
  <boot-button theme="secondary" size="lg">Secondary</boot-button>
</div>

```html
<boot-button theme="primary" size="lg">Primary</boot-button>
<boot-button theme="secondary" size="lg">Secondary</boot-button>
```

<div class="example">
  <boot-button theme="primary" size="sm">Primary</boot-button>
  <boot-button theme="secondary" size="sm">Secondary</boot-button>
</div>

```html
<boot-button theme="primary" size="sm">Primary</boot-button>
<boot-button theme="secondary" size="sm">Secondary</boot-button>
```

## Disabled state

Make buttons look inactive by adding the ```disabled``` boolean attribute to any ```<boot-button>``` element. Disabled buttons have ```pointer-events: none``` applied to, preventing hover and active states from triggering.

<div class="example">
  <boot-button theme="primary" size="lg" disabled>Primary</boot-button>
  <boot-button theme="secondary" size="lg" disabled>Secondary</boot-button>
</div>

```html
<boot-button theme="primary" size="lg" disabled>Primary</boot-button>
<boot-button theme="secondary" size="lg" disabled>Secondary</boot-button>
```

### Link functionality caveat

To cover cases where you have to keep the ```link``` attribute on a disabled link, the ```.disabled``` class uses ```pointer-events: none``` to try to disable the link functionality of ```<a>```s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support ```pointer-events: none```, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to ```aria-disabled="true"```, also include a ```tabindex="-1"``` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

<div class="example">
  <boot-button link="#" theme="primary" size="lg" disabled>Primary link</boot-button>
  <boot-button link="#" theme="secondary" size="lg" disabled>Secondary</boot-button>
</div>

```html
<boot-button link="#" theme="primary" size="lg" disabled>Primary link</boot-button>
<boot-button link="#" theme="secondary" size="lg" disabled>Secondary</boot-button>
```
