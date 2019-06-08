module.exports = {
    jsCompiler: 'typescript',
    banner: true,
    output: {
        extractCSS: false,
    },
    plugins: {
        vue: {
            css: true,
        },
    },
};