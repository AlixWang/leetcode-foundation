module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
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
