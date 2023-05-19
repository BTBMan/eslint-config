const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
});
