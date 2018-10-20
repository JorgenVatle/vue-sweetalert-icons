import Vue from 'rollup-plugin-vue';
import Buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        name: 'SweetalertIcon',
        exports: 'named',
    },
    plugins: [
        Vue({
            css: true,
            compileTemplate: true,
        }),
        Buble(),
    ],
};