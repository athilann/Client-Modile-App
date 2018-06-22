const modoDev = process.env.NODE_ENV != "production";
const webpack = require('webpack');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = { 

    mode: modoDev ? 'development' : 'production',
    entry: './src/index.jsx',

    output: { 
        path: __dirname + '/public',
        filename: './app.js' 
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    devServer: { 
        port: 8080,
        contentBase: './public',
         
    },
    resolve: { 
        extensions: ['*', '.js', '.jsx'],
        alias: { 
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js' 
        } 
    },
    plugins: [ new webpack.ProvidePlugin({ 
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery' 
    }),  new ExtractTextPlugin({
        filename: 'app.css'
    }) ],
     module: { 
        rules: [{ 
            test: /.js[x]?$/,
            loader : 'babel-loader',
            exclude: /node_modules/,
            query: { 
                babelrc: false,
                presets: ['@babel/preset-env','@babel/preset-react','stage-0'],
                plugins: ['@babel/plugin-proposal-object-rest-spread'] 
            } 
        }, { 
            test: /\.s?[as]ss$/,
            use: [
                ExtractTextPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, { 
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            use : ['file-loader'] 
        }],
    }
};