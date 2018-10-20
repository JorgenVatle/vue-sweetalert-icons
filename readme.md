# SweetAlert Icons for Vue
A clean and simple Vue wrapper for [SweetAlert](https://sweetalert.js.org/)'s fantastic status icons. This wrapper is intended for users who are interested in _just_ the icons. For the standard SweetAlert modal with all of its bells and whistles, you should probably use [Vue-SweetAlert2](https://github.com/avil13/vue-sweetalert2#readme)

[![Screenshot from Gyazo](https://gyazo.com/b5a22e2d3629a5884ccbde2bd1e43e2d/raw)](https://gyazo.com/b5a22e2d3629a5884ccbde2bd1e43e2d)

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
