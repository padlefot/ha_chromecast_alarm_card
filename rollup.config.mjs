import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/chromecast-alarm-card.ts",
  output: {
    file: "dist/chromecast-alarm-card.js",
    format: "es",
  },
  plugins: [
    resolve(),
    typescript(),
    terser({ format: { comments: false } }),
  ],
};
