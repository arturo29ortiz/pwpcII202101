const path = require('path');
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
        port: 8085,
        host: 'localhost'
    }
}