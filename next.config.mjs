import path from 'path'

export default {
  webpack: (config, { isServer }) => {
    // Agregar la propiedad output a la configuración
    config.output = {
      // Aquí puedes especificar las opciones de output
      // Por ejemplo, puedes especificar el directorio de salida y el nombre del archivo
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    }

    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
            publicPath: '/_next/static/fonts/'
          }
        }
      ]
    })

    return config
  }
}
