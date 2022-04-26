---
title: Form Control
---

# {{ $frontmatter.title }}

Give textual form controls like ```<boot-input>```s an upgrade with custom styles, sizing, focus states, and more.

## Example

<div class="example">
  <div class="mb-3">
    <label for="exampleFormControlInputlabel1" class="form-label">Email address</label>
    <boot-input type="email" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
</div>

```html
<div class="mb-3">
  <label for="exampleFormControlInputlabel1" class="form-label">Email address</label>
  <boot-input type="email" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
```

## Sizing

Set heights using ```size``` attribute like ```lg``` and ```sm```.

<div class="example">
  <boot-input size="lg" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
  <boot-input placeholder="Default input" aria-label="default input example"/>
  <boot-input size="sm" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
</div>

```html
<boot-input size="lg" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
<boot-input placeholder="Default input" aria-label="default input example"/>
<boot-input size="sm" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
```

## Disabled

Add the ```disabled``` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

<div class="example">
  <boot-input placeholder="Disabled input" aria-label="Disabled input example" disabled/>
  <boot-input model-value="Disabled readonly input" aria-label="Disabled input example" disabled readonly/>
</div>

```html
<boot-input placeholder="Disabled input" aria-label="Disabled input example" disabled/>
<boot-input model-value="Disabled readonly input" aria-label="Disabled input example" disabled readonly/>
```

## Readonly

Add the ```readonly``` boolean attribute on an input to prevent modification of the input’s value.

<div class="example">
  <boot-input model-value="Readonly input here..." aria-label="readonly input example" readonly/>
</div>

```html
<boot-input model-value="Readonly input here..." aria-label="readonly input example" readonly/>
```

## Readonly plain text

If you want to have ```<boot-input readonly>``` elements in your form styled as plain text, use the ```plaintext``` boolean attribute to remove the default form field styling and preserve the correct margin and padding.

<div class="example">
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <boot-input readonly plaintext id="staticEmail" model-value="email@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <boot-input type="password" id="inputPassword"/>
    </div>
  </div>
</div>

```html
<div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <boot-input readonly plaintext id="staticEmail" model-value="email@example.com"/>
  </div>
</div>
<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <boot-input type="password" id="inputPassword"/>
  </div>
</div>
```

## File input

<div class="example">
  <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <boot-input type="file" id="formFile"/>
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
    <boot-input type="file" id="formFileMultiple" multiple/>
  </div>
  <div class="mb-3">
    <label for="formFileDisabled" class="form-label">Disabled file input example</label>
    <boot-input type="file" id="formFileDisabled" disabled/>
  </div>
  <div class="mb-3">
    <label for="formFileSm" class="form-label">Small file input example</label>
    <boot-input size="sm" id="formFileSm" type="file"/>
  </div>
  <div>
    <label for="formFileLg" class="form-label">Large file input example</label>
    <boot-input size="lg" id="formFileLg" type="file"/>
  </div>
</div>

```html
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <boot-input type="file" id="formFile"/>
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <boot-input type="file" id="formFileMultiple" multiple/>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <boot-input type="file" id="formFileDisabled" disabled/>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <boot-input size="sm" id="formFileSm" type="file"/>
</div>
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <boot-input size="lg" id="formFileLg" type="file"/>
</div>
```