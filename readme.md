# SweetAlert Icons for Vue
A clean and simple Vue wrapper for [SweetAlert](https://sweetalert.js.org/)'s fantastic status icons. This wrapper is intended for users who are interested in _just_ the icons. For the standard SweetAlert modal with all of its bells and whistles, you should probably use [Vue-SweetAlert2](https://github.com/avil13/vue-sweetalert2#readme)

<p align="center">
    <img src="https://gyazo.com/a045a1b5c96860c6e75ed0c7e48a3c81/raw" alt="Example usage">
</p>

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
