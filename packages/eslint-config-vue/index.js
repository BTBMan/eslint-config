const { defineConfig } = require('eslint-define-config');
const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

module.exports = defineConfig({
  extends: ['plugin:vue/vue3-recommended', '@btbman/eslint-config-base'],
  env: {
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          js: 'espree',
          jsx: 'espree',
          ts: '@typescript-eslint/parser',
          tsx: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.vue'],
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        ...(TS ? { '@typescript-eslint/no-unused-vars': 'off' } : null),
      },
    },
  ],
  rules: {
    'vue/html-closing-bracket-newline': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-html-element-is': 'off',
    'vue/require-component-is': 'off',
    'vue/require-default-prop': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['iconify-icon'],
      },
    ],
  },
});
