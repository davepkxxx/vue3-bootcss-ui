const ts = require('@rollup/plugin-typescript');
const vue = require('@vitejs/plugin-vue');

function config(format) {
  const ext = format === 'es' ? 'esm' : format;

  return {
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
      vue(),
    ],
  };
}

export default ['cjs', 'es', 'amd', 'umd'].map(config);
