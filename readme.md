# SweetAlert Icons for Vue
A clean and simple Vue wrapper for [SweetAlert](https://sweetalert.js.org/)'s fantastic status icons. This wrapper is intended for users who are interested in _just_ the icons. For the standard SweetAlert modal with all of its bells and whistles, you should probably use [Vue-SweetAlert2](https://github.com/avil13/vue-sweetalert2#readme)

<p align="center">
    <img src="https://gyazo.com/109370936782ff5257d3ff2b8ea5b4d1/raw" alt="Example usage">
</p>

#### Installation
```bash
npm install --save vue-sweetalert-icons
```

### Usage
```vue
<template>
    <!-- Type can be one of: "success", "warning", "error" and "loading" -->
    <sweetalert-icon icon="success"></sweetalert-icon>
</template>

<script>
    import SweetalertIcon from 'vue-sweetalert-icons';
    
    export default {
        components: { SweetalertIcon },
    }
</script>
```

#### Requirements
- [Vue 2.0+](https://vuejs.org/)
- SASS/SCSS preprocessor for Vue
    - Meteor users: [akryum:vue-sass](https://github.com/meteor-vue/vue-meteor/tree/master/packages/vue-sass)
    - Others: [Vue Preprocessor Guide](https://vue-loader.vuejs.org/guide/pre-processors.html)
    
#### Credits
- [SweetAlert](https://sweetalert.js.org/)

#### License
ISC
