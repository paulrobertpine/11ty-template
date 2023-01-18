---
title: Hello 11ty
layout: "base.njk"
---

Here is a paragraph. Please [see this link](https://google.ca) for things.

## Heading Two

Here is paragraph two. Some **bold text** is here oh yeah. Here is [an external link](#){.external}. Here is a [link to a PDF](#){.pdf}.

<div x-data="{ count: 0 }">
    <button x-on:click="count++">Increment</button>
    <span x-text="count"></span>
</div>

### Heading Three

Here is paragraph three. Some _italicized text_ is here uh huh.

A person said something very important. They said:

> Sha na na na na sha na na na na na

## Heading Two

Here is paragraph four. An ordered list of things:

1. one
1. two
1. three

Here is a nested unordered list:

- apples
- oranges
  - clementines
  - nectarines
- bananas
