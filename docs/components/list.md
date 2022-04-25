---
title: List Group
---

# {{ $frontmatter.title }}

List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.

## Basic example

The most basic list group is an unordered list with list items and the proper classes.

<div class="example">
  <boot-list-group>
    <boot-list-group-item>An item</boot-list-group-item>
    <boot-list-group-item>A second item</boot-list-group-item>
    <boot-list-group-item>A third item</boot-list-group-item>
    <boot-list-group-item>A fourth item</boot-list-group-item>
    <boot-list-group-item>And a fifth one</boot-list-group-item>
  </boot-list-group>
</div>

```html
<boot-list-group>
  <boot-list-group-item>An item</boot-list-group-item>
  <boot-list-group-item>A second item</boot-list-group-item>
  <boot-list-group-item>A third item</boot-list-group-item>
  <boot-list-group-item>A fourth item</boot-list-group-item>
  <boot-list-group-item>And a fifth one</boot-list-group-item>
</boot-list-group>
```

## Disabled items

Add ```disabled``` to a ```<boot-list-group-item>``` to make it appear disabled. Note that some elements with ```disabled``` will also require custom JavaScript to fully disable their click events (e.g., links).

<div class="example">
  <boot-list-group>
    <boot-list-group-item disabled>An item</boot-list-group-item>
    <boot-list-group-item>A second item</boot-list-group-item>
    <boot-list-group-item>A third item</boot-list-group-item>
    <boot-list-group-item>A fourth item</boot-list-group-item>
    <boot-list-group-item>And a fifth one</boot-list-group-item>
  </boot-list-group>
</div>

```html
<boot-list-group>
  <boot-list-group-item disabled>An item</boot-list-group-item>
  <boot-list-group-item>A second item</boot-list-group-item>
  <boot-list-group-item>A third item</boot-list-group-item>
  <boot-list-group-item>A fourth item</boot-list-group-item>
  <boot-list-group-item>And a fifth one</boot-list-group-item>
</boot-list-group>
```

## Links

Create actionable list group items with hover, disabled, and active states by adding ```link```.

<div class="example">
  <boot-list-group>
    <boot-list-group-item link="#" active>The current link item</boot-list-group-item>
    <boot-list-group-item link="#">A second item</boot-list-group-item>
    <boot-list-group-item link="#">A third item</boot-list-group-item>
    <boot-list-group-item link="#">A fourth item</boot-list-group-item>
    <boot-list-group-item link="#" disabled>And a fifth one</boot-list-group-item>
  </boot-list-group>
</div>

```html
<boot-list-group>
  <boot-list-group-item link="#" active>The current link item</boot-list-group-item>
  <boot-list-group-item link="#">A second item</boot-list-group-item>
  <boot-list-group-item link="#">A third item</boot-list-group-item>
  <boot-list-group-item link="#">A fourth item</boot-list-group-item>
  <boot-list-group-item link="#" disabled>And a fifth one</boot-list-group-item>
</boot-list-group>
```

## Flush

Add ```flush``` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

<div class="example">
  <boot-list-group flush>
    <boot-list-group-item>An item</boot-list-group-item>
    <boot-list-group-item>A second item</boot-list-group-item>
    <boot-list-group-item>A third item</boot-list-group-item>
    <boot-list-group-item>A fourth item</boot-list-group-item>
    <boot-list-group-item>And a fifth one</boot-list-group-item>
  </boot-list-group>
</div>

```html
<boot-list-group flush>
  <boot-list-group-item>An item</boot-list-group-item>
  <boot-list-group-item>A second item</boot-list-group-item>
  <boot-list-group-item>A third item</boot-list-group-item>
  <boot-list-group-item>A fourth item</boot-list-group-item>
  <boot-list-group-item>And a fifth one</boot-list-group-item>
</boot-list-group>
```
