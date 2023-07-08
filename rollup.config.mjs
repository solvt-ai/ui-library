import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svgr from '@svgr/rollup';

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      svgr(),
      resolve({
        alias: {
          '@solvt-ai/ui-library': './src/components'
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
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.(css|scss)$/],
    plugins: [dts({
      compilerOptions: {
        baseUrl: './src',
        paths: {
          '@solvt-ai/ui-library/*': ['components/*']
        }
      }
    })],
    preserveSymlinks: true
  },
];
