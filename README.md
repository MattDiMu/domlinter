# Domlinter [![Build Status][ci-img]][ci]

[PostCSS] plugin to give live feedback on the dom (created by HTML/JS) using CSS selectors..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/MattDiMu/domlinter.svg
[ci]:      https://travis-ci.org/MattDiMu/domlinter

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-domlinter') ])
```

See [PostCSS] docs for examples for your environment.
