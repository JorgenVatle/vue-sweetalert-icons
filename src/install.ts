import Icon from './components/icon.vue';
import { VueConstructor } from 'vue';

let installed = false;

export function install(Vue: VueConstructor) {
    if (installed) return;
    installed = true;

    Vue.component('SweetalertIcon', Icon);
}