const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "stream": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "url": require.resolve("url"),
    "util": require.resolve("util"),
    "zlib": require.resolve("browserify-zlib"),
    "assert": require.resolve("assert")
  });
  config.resolve.fallback = fallback;
  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);
  
  return config;
}
