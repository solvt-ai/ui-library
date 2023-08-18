import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from '@rollup/plugin-url'
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svgr from '@svgr/rollup';

import packageJson from "./package.json" assert { type: "json" };

const list = [
    "src/components/Button/index.ts",
    "src/components/Checkbox/index.ts",
    "src/components/Input/index.ts",
    "src/components/Link/index.ts",
    "src/components/Modal/index.ts",
    "src/icons/24/index.ts",
    "src/icons/30/index.ts"
];

export default [
  {
    input: ["src/index.ts", ...list],
    output: [
      {
        dir: 'dist',
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: "esm",
        sourcemap: true,
      },
    ],
    preserveModules: true,
    external: ["react", "react-dom"],
    plugins: [
      url(),
      svgr({ icon: true }),
      resolve({
        alias: {
          '@solvt-ai/ui-library/components': './src/components'
        },
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true
      }),
    ],
    preserveSymlinks: true
  }
];
