module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'quotes': [2, 'single'],
    'no-console': [0],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}