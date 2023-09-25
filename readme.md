# Animated SweetAlert Icons for Vue
A clean and simple Vue wrapper for [SweetAlert](https://sweetalert.js.org/)'s fantastic status icons. This wrapper is intended for users who are interested in _just_ the icons. For the standard SweetAlert modal with all of its bells and whistles, you should probably use [Vue-SweetAlert 2](https://github.com/avil13/vue-sweetalert2#readme)

<p align="center">
    <img src="https://gyazo.com/a045a1b5c96860c6e75ed0c7e48a3c81/raw" alt="Example usage">
</p>

## Install
### Vue v3
```bash
npm install vue-sweetalert-icons
```
### Vue v2
```bash
npm install vue-sweetalert-icons@4
```

## Import
```js
import SweetAlertIcons from 'vue-sweetalert-icons';

// For Vue v3, you also need to import styles explicitly:
import 'vue-sweetalert-icons/dist/style.css'

Vue.use(SweetAlertIcons);
```
If you're using Nuxt, you might need additional steps [(read more)](#usage-with-nuxt)

## Use
```vue
<template>
    <!-- Icon can be one of: "success", "warning", "info", "error" and "loading" -->
    <sweetalert-icon icon="success" />

    <!-- Optionally, you can customize colors for all icons! 🎨 -->
    <sweetalert-icon icon="warning" color="#6a737d"/>
</template>
```

## Alternative Usage
If you'd rather not use the package globally, you can import `SweetalertIcon` for use with a single vue
component/instance instead:
```vue
<template>
    <sweetalert-icon icon="success"></sweetalert-icon>
</template>

<script>
    import SweetalertIcon from 'vue-sweetalert-icons';
    
    // For Vue v3, make sure you've imported the styles somewhere in your app as well.
    // import 'vue-sweetalert-icons/dist/style.css'
    
    export default {
        components: { SweetalertIcon },
    }
</script>
```

## Usage with Nuxt 2
Due to an issue with the way styles are injected into Nuxt, please wrap `<sweetalert-icon />` around 
[`<no-ssr>`](https://nuxtjs.org/api/components-no-ssr/) tags. If you're using Nuxt 3, this step is no longer necessary.
```vue
<no-ssr>
    <sweetalert-icon icon="info" />
</no-ssr>
```

## Credits
- [SweetAlert](https://sweetalert.js.org/)
- [Alexandre Chopin](https://codepen.io/alexchopin/)

## License
ISC
