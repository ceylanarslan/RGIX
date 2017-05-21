let path = require('path');
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
let pathsToClean = [
    'dist/script/*.*',
];
let cleanOptions = {
    verbose: true,
    dry: false
}
module.exports = {

    entry: {
        main: './src/script/pages/index.tsx',
        vendor: 'jquery'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist/script')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: ['awesome-typescript-loader']},
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new CheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
};