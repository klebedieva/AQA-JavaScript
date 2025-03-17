import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin-js';
import jestConfig from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended, 
  {
    plugins: {
      '@stylistic/js': stylistic, 
      jest: jestConfig, 
    },
  },
  {
    rules: {
      '@stylistic/js/indent': ['error', 2, { SwitchCase: 2 }],
      '@stylistic/js/no-extra-semi': ['error'],
      '@stylistic/js/semi-spacing': ['error', { before: false, after: true }],
      '@stylistic/js/space-in-parens': ['error', 'never'],
      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
    },
  },
];
