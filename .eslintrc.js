module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
