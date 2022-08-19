module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  overrides: [{
    files: ['*.stories.js', '**/icons/*', '*.js'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js'],
    }],
  },
};
