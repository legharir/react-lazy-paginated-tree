module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
  },
};
