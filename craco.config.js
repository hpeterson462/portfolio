// module.exports = {
//   style: {
//     postcss: {
//       plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//       ],
//     },
//   },
// }

const tailwindcss = require("tailwindcss"); module.exports = {
  style: {
    postcss: {
      mode: "extends" /* (default value) */ || "file",
      plugins: [
        tailwindcss("./tailwind.js")
      ]
    }
  }
};
