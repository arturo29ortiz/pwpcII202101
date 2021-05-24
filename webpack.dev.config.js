const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//Importando el ESLINT
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    //0. Establecer el modo del configurador 
    mode: 'development',
    //1. Espeficicando el archivo de entrada 
    entry: './client/index.js',
    //2. Especificando la salida
    output: {
        //3. Ruta absoluta de salida 
        path: path.join(__dirname, 'public'),
        //4. Nombre de archivo de salida
        filename: 'js/bundle.js',
        //5. Ruta del path publico para fines del servidor de desarrollo
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: process.env.PORT || '3000',
        host: 'localhost'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'modules': false,
                                        'useBuiltIns': 'usage',
                                        'targets': {"chrome": "80"},
                                        'corejs': 3
                                    }
                                ]
                            ],
                            "plugins": [
                                [
                                    "module-resolver",
                                    {
                                        "root": ["./"],
                                        "alias": {
                                            "@client": "./client",
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        }),
        new EslintWebpackPlugin()
    ]
}