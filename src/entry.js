import SweetalertIcon from './components/icon.vue';

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('SweetalertIcon', SweetalertIcon);
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

SweetalertIcon.install = install;

export default SweetalertIcon;
export { SweetalertIcon };
