// https://github.com/postcss/postcss-load-config#array
module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require("tailwindcss"),
    require('autoprefixer'),
    process.env.NODE_ENV == 'production' ? require('cssnano') : false,
  ],
};