import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { createRequire } from "module";

// Use CommonJS `require` for importing package.json
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,  // Output CommonJS file
      format: "cjs",            // CommonJS format
      sourcemap: true           // Enable sourcemaps for easier debugging
    },
    {
      file: packageJson.module, // Output ES Module file
      format: "esm",            // ES Module format
      sourcemap: true           // Enable sourcemaps
    }
  ],
  plugins: [
    peerDepsExternal(),        // Exclude peer dependencies from the bundle
    resolve(),                 // Resolve modules from node_modules
    commonjs(),                // Convert CommonJS modules to ES6
    typescript({ tsconfig: "./tsconfig.json" })  // Use your TypeScript config
  ],
  external: ["react", "react-dom"] // Externalize react and react-dom to avoid bundling them
};
