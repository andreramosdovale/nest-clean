import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ['@rocketseat/eslint-config/node'],
    rules: {
      'no-useless-constructor': 'off',
    },
  }),
];