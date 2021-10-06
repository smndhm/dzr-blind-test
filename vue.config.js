module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dzr-blind-test/' : '/',
  pwa: {
    name: 'Blind Tests',
    themeColor: '#000000',
    msTileColor: '#000000',
  },
  devServer: {
    disableHostCheck: true,
  },
};
