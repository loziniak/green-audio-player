// ESLint flat config for ESLint v9+
import importPlugin from 'eslint-plugin-import';

export default [
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      indent: ['error', 4],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    },
  },
];
