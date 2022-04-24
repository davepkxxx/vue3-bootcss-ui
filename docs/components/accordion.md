---
title: Accordion
---

<script setup>
import { ref } from 'vue';
const eampleActiveNames = ref(['#1']);
const alwaysOpenActiveNames = ref(['#1']);
</script>

# {{ $frontmatter.title }}

## Example

Click the accordions below to expand/collapse the accordion content.
<div class="example">
  <boot-accordion :active-names="eampleActiveNames">
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
<boot-accordion :active-names="activeNames">
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
<script setup>
import { ref } from 'vue';
const activeNames = ref(['#1']);
</script>
```

## Always open

Add the ```multi``` attribute on ```<boot-accordion>``` to make accordion items stay open when another item is opened.

<div class="example">
  <boot-accordion :active-names="alwaysOpenActiveNames" multi>
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
<boot-accordion :active-names="activeNames" multi="true">
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
<script setup>
import { ref } from 'vue';
const activeNames = ref(['#1']);
</script>
```
