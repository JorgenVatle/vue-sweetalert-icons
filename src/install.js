import Icon from './components/icon';

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.component('SweetalertIcon', Icon);
}