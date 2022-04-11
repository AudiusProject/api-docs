module.exports = {
  env: {
    node: true
  },
  extends: ['prettier-standard', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'never'],
    'no-undef': 'off',
    'no-empty': 'off',
    'arrow-parens': 'off',
    'padded-blocks': 'off',
    'space-before-function-paren': 'off',

    'prettier/prettier': 'error'
  }
}
