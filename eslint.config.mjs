import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react/prop-types': 'off',
      },
    },
  },
  {
    ignores: ['!node_modules/', 'node_modules/*'],
  },
];
