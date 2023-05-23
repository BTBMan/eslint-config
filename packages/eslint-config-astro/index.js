const { defineConfig } = require('eslint-define-config');
const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

module.exports = defineConfig({
  extends: ['plugin:astro/recommended', '@btbman/eslint-config-base'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: TS ? '@typescript-eslint/parser' : undefined,
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  rules: {},
});
