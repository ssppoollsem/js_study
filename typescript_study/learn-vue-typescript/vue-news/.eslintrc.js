module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Spinner'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 200,
        tabWidth: 2,
        singleQuote: true,
        endOfLine: 'auto',
        lintOnSave: false,
      },
    ],
  },
};
