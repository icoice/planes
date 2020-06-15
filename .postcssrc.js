// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  parser: 'postcss-scss',
  "plugins": {
    "postcss-easy-import": {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-lilia-units": {},
    "postcss-mixins": {},
    "postcss-calc": {},
    "autoprefixer": {}, // to edit target browsers: use "browserslist" field in package.json
    "precss": {},
  }
}
