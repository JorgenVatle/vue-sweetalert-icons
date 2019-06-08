// rollup.config.js
import Vue from 'rollup-plugin-vue';
import Buble from 'rollup-plugin-buble';
import CommonJs from 'rollup-plugin-commonjs';
import Replace from 'rollup-plugin-replace';
import Minimist from 'minimist';
import PostCSS from 'rollup-plugin-postcss';
import Autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

const argv = Minimist(process.argv.slice(2));

const baseConfig = {
    input: 'src/entry.js',
    plugins: {
        preVue: [
            Replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            CommonJs(),
            PostCSS({
                plugins: [Autoprefixer]
            }),
        ],
        vue: {
            css: true,
            template: {
                isProduction: true,
            },
        },
        postVue: [
            Buble(),
        ],
    },
};

// UMD/IIFE shared settings: externals and output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const external = [
    // list external dependencies, exactly the way it is written in the import statement.
    // eg. 'jquery'
];
const globals = {
    // Provide global variable names to replace your external imports
    // eg. jquery: '$'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
    const esConfig = {
        ...baseConfig,
        output: {
            file: 'dist/sweetalert-icon.esm.js',
            format: 'esm',
            exports: 'named',
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            Vue(baseConfig.plugins.vue),
            ...baseConfig.plugins.postVue,
            terser({
                output: {
                    ecma: 6,
                },
            }),
        ],
    };
    buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
    const umdConfig = {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/sweetalert-icon.ssr.js',
            format: 'cjs',
            name: 'SweetalertIcon',
            exports: 'named',
            globals,
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            Vue({
                ...baseConfig.plugins.vue,
                template: {
                    ...baseConfig.plugins.vue.template,
                    optimizeSSR: true,
                },
            }),
            ...baseConfig.plugins.postVue,
        ],
    };
    buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
    const unpkgConfig = {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/sweetalert-icon.min.js',
            format: 'iife',
            name: 'SweetalertIcon',
            exports: 'named',
            globals,
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            Vue(baseConfig.plugins.vue),
            ...baseConfig.plugins.postVue,
            terser({
                output: {
                    ecma: 5,
                },
            }),
        ],
    };
    buildFormats.push(unpkgConfig);
}

export default buildFormats;
