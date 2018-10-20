import Icon from './components/icon.vue';

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.component('SweetalertIcon', Icon);
}