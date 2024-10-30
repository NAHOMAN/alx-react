const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to development
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve files from the dist directory
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply this rule for .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Apply this rule for image files
        use: [
          {
            loader: 'image-webpack-loader', // Use image-webpack-loader for images
            options: {
              // Options for image-webpack-loader
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // Optimize PNG images
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              // Optimize GIF images
              gifsicle: {
                interlaced: false,
              },
              // Optimize SVG images
              webp: {
                quality: 75,
              },
            },
          },
          'file-loader', // Use file-loader to copy the files
        ],
      },
    ],
  },
  devtool: 'inline-source-map', // Enable inline source maps
};
