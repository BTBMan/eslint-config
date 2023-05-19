# @btbman/eslint-config

## usage

### Install

```bash
pnpm add -D eslint @btbman/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@btbman" // Basic config for Javascript and Typescript.
}
```

```json
{
  "extends": "@btbman/eslint-config/vue" // For Vue.
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": true, // Enable if your're using prettier.
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env.

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: '@btbman',
};
```

### Work with Prettier

If your project has the prettier dependence. It can automatically use prettier to lint.

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

Or you can add the above to the specified configuration file.

and then

```bash
npm i -D lint-staged simple-git-hooks
```

Also works with Husky.