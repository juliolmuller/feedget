import anyConfig from 'eslint-config-any';

export default [
  ...anyConfig.react,
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
