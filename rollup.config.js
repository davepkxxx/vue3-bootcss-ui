const ts = require('@rollup/plugin-typescript');
const vue = require('@vitejs/plugin-vue');
const { defineConfig } =  require('rollup');
const css = require('rollup-plugin-css-only');

function config(format) {
  const ext = format === 'es' ? 'esm' : format;

  return defineConfig({
    input: 'src/index.ts',
    external: 'vue',
    output: {
      file: `dist/index.${ext}.js`,
      format,
      name: 'bootui',
      sourcemap: true,
    },
    plugins: [
      ts({ tsconfig: './tsconfig.json' }),
      css({ output: 'index.css' }),
      vue(),
    ],
  });
}

export default ['cjs', 'es', 'amd', 'umd'].map(config);
