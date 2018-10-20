# SweetAlert Icons for Vue
A clean and simple Vue wrapper for [SweetAlert](https://sweetalert.js.org/)'s fantastic status icons. This wrapper is intended for users who are interested in _just_ the icons. For the standard SweetAlert modal with all of its bells and whistles, you should probably use [Vue-SweetAlert2](https://github.com/avil13/vue-sweetalert2#readme)

[![Screenshot from Gyazo](https://gyazo.com/b5a22e2d3629a5884ccbde2bd1e43e2d/raw)](https://gyazo.com/b5a22e2d3629a5884ccbde2bd1e43e2d)

## Install
```bash
npm install --save vue-sweetalert-icons
```

## Import
```js
import SweetAlertIcons from 'vue-sweetalert-icons';

Vue.use(SweetAlertIcons);
```

## Use
```vue
<template>
    <!-- Type can be one of: "success", "warning", "error" and "loading" -->
    <sweetalert-icon icon="success"></sweetalert-icon>
</template>
```

## Credits
- [SweetAlert](https://sweetalert.js.org/)

## License
ISC
