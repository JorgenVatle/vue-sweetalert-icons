# SweetAlert Icons for Vue
A clean and simple Vue wrapper for [SweetAlert](https://sweetalert.js.org/)'s fantastic status icons.

#### Installation
```bash
npm install --save vue-sweetalert-icons
```

### Usage
```vue

<template>
    <!-- Type can be one of: "success", "warning", "error" and "loading" -->
    <sweetalert-icon type="success"></sweetalert-icon>
</template>

<script>
    import SweetalertIcon from 'vue-sweetalert-icons';
    
    export default {
        components: {SweetalertIcon},
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