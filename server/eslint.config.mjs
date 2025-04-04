import anyConfig from 'eslint-config-any';

export default [
  ...anyConfig.node,
  ...anyConfig.jest,
  {
    files: ['**/*.{test,spec}.*'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
