import Vue from 'rollup-plugin-vue';
import CommonJS from 'rollup-plugin-commonjs';
import Buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        name: 'SweetalertIcon',
        exports: 'named',
    },
    plugins: [
        CommonJS(),
        Vue({
            css: true,
            compileTemplate: true,
        }),
        Buble(),
    ],
};