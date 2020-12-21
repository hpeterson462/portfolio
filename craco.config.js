module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  eslint: {
    enable: true,
    mode: "extends" || "file",
    configure: { /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */ },
    configure: (eslintConfig, { env, paths }) => { return eslintConfig; },
    pluginOptions: { /* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */ },
    pluginOptions: (eslintOptions, { env, paths }) => { return eslintOptions; }
  },
}
