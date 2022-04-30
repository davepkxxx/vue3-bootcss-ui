---
title: Accordion
---

<script>
export default {
  data() {
    return {
      eampleActiveNames: ['headingOne'],
      flushActiveNames: ['flush-headingOne'],
      alwaysOpenActiveNames: ['panelsStayOpen-headingOne'],
    };
  },
};
</script>

# {{ $frontmatter.title }}

## Example

Click the accordions below to expand/collapse the accordion content.

<div class="example">
  <boot-accordion :active-names="eampleActiveNames" id="accordionExample">
    <boot-accordion-item name="headingOne">
      <template v-slot:header>Accordion Item #1</template>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="headingTwo">
      <template v-slot:header>Accordion Item #2</template>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="headingThree">
      <template v-slot:header>Accordion Item #3</template>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
  </boot-accordion>
</div>

```html
<template>
  <boot-accordion :active-names="eampleActiveNames" id="accordionExample">
    <boot-accordion-item name="headingOne">
      <template v-slot:header>Accordion Item #1</template>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="headingTwo">
      <template v-slot:header>Accordion Item #2</template>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="headingThree">
      <template v-slot:header>Accordion Item #3</template>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
  </boot-accordion>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['headingOne'],
    };
  },
};
</script>
```

## Flush

Add ```flush``` boolean attribute to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

<div class="example" style="background: rgb(248, 249, 250);">
  <boot-accordion :active-names="flushActiveNames" flush id="accordionFlushExample">
    <boot-accordion-item name="flush-headingOne">
      <template v-slot:header>Accordion Item #1</template>
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> boolean attribute. This is the first item's accordion body.
    </boot-accordion-item>
    <boot-accordion-item name="flush-headingTwo">
      <template v-slot:header>Accordion Item #2</template>
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> boolean attribute. This is the second item's accordion body. Let's imagine this being filled with some actual content.
    </boot-accordion-item>
    <boot-accordion-item name="flush-headingThree">
      <template v-slot:header>Accordion Item #3</template>
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> boolean attribute. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
    </boot-accordion-item>
  </boot-accordion>
</div>

```html
<template>
  <boot-accordion :active-names="flushActiveNames" flush id="accordionFlushExample">
    <boot-accordion-item name="flush-headingOne">
      <template v-slot:header>Accordion Item #1</template>
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> boolean attribute. This is the first item's accordion body.
    </boot-accordion-item>
    <boot-accordion-item name="flush-headingTwo">
      <template v-slot:header>Accordion Item #2</template>
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> boolean attribute. This is the second item's accordion body. Let's imagine this being filled with some actual content.
    </boot-accordion-item>
    <boot-accordion-item name="flush-headingThree">
      <template v-slot:header>Accordion Item #3</template>
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> boolean attribute. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
    </boot-accordion-item>
  </boot-accordion>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['flush-headingOne'],
    };
  },
};
```

## Always open

Add the ```multi``` boolean attribute on ```<boot-accordion>``` to make accordion items stay open when another item is opened.

<div class="example">
  <boot-accordion :active-names="alwaysOpenActiveNames" multi id="accordionPanelsStayOpenExample">
    <boot-accordion-item name="#1">
      <template v-slot:header>Accordion Item #1</template>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="#2">
      <template v-slot:header>Accordion Item #2</template>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="#3">
      <template v-slot:header>Accordion Item #3</template>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
  </boot-accordion>
</div>

```html
<template>
  <boot-accordion :active-names="activeNames" multi="true" id="accordionPanelsStayOpenExample">
    <boot-accordion-item name="panelsStayOpen-headingOne">
      <template v-slot:header>Accordion Item #1</template>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="panelsStayOpen-headingTwo">
      <template v-slot:header>Accordion Item #2</template>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
    <boot-accordion-item name="panelsStayOpen-headingThree">
      <template v-slot:header>Accordion Item #3</template>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>&lt;boot-accordion-item&gt;</code>, though the transition does limit overflow.
    </boot-accordion-item>
  </boot-accordion>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['panelsStayOpen-headingOne'],
    };
  },
};
</script>
```
