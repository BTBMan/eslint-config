const { defineConfig } = require('eslint-define-config');
const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

module.exports = defineConfig({
  extends: [
    ...(TS ? ['plugin:solid/typescript'] : ['plugin:solid/recommended']),
    '@btbman/eslint-config-base',
  ],
  rules: {},
});
