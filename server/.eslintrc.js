module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [],
  ignorePatterns: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import-helpers', 'prettier'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
        groups: ['module', '/^~//', ['parent', 'sibling', 'index']],
        newlinesBetween: 'always',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
