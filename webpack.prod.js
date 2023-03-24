const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',

    output: {
        publicPath: "https://mittalankit.github.io/nagp-hangman/",
    },
});