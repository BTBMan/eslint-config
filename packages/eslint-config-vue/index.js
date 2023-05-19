const { defineConfig } = require('eslint-define-config');
const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

if (!TS) {
  // eslint-disable-next-line no-console
  console.warn(
    '[@btbman/eslint-config-vue] TypeScript is not installed, fallback to JS only.',
  );
}

module.exports = defineConfig({
  extends: [
    'plugin:vue/vue3-recommended',
    TS ? '@btbman/eslint-config-ts' : '@btbman/eslint-config-base',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
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
        ignores: [],
      },
    ],
  },
});
