const babel = require("rollup-plugin-babel");
const path = require("path");
const extensions = ["js", "ts"];
export default {
  input: path.resolve(__dirname, "src/index.ts"),
  output: {
    file: path.resolve(__dirname, "lib", "bundle.js"),
    format: "es",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      extensions,
    }),
  ],
};
