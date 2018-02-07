module.exports = options => {
  return {
    entry: "./src/app/index.js",
    output: {
      filename: "./src/build/bundle.js"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    }
  };
};
