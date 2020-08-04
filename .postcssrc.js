// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  parser: 'postcss-scss',
  // 注意这里插件排序，它按排序执行编译，请不要随意改变次序
  plugins: {
    "postcss-preset-env": {},
    "postcss-easy-import": {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-lilia-units": {},
    "postcss-mixins": {},
    "autoprefixer": {}, // to edit target browsers: use "browserslist" field in package.json
    "precss": {},
    "postcss-calc": {},
  }
}
