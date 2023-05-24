# @btbman/eslint-config

## Usage

### Install

```bash
pnpm i -D eslint @btbman/eslint-config
```

> Typescript and Prettier are optional.

### Config `.eslintrc`

<details open>
<summary>Basic config for Javascript and Typescript.</summary><br>

```json
{
  "extends": "@btbman"
}
```

</details>

<details>
<summary>Vue</summary><br>

```json
{
  "extends": "@btbman/eslint-config/vue"
}
```

</details>

<details>
<summary>Svelte</summary><br>

```json
{
  "extends": "@btbman/eslint-config/svelte"
}
```

</details>

<details>
<summary>Astro</summary><br>

```json
{
  "extends": "@btbman/eslint-config/astro"
}
```

</details>

<details>
<summary>Solid</summary><br>

```json
{
  "extends": "@btbman/eslint-config/solid"
}
```

</details>

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
  "prettier.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

> Enable Prettier if your're using.

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env.

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: '@btbman',
};
```

### Working with Prettier

If your project has the Prettier dependence. It can automatically use Prettier to lint.

For Svelte.

```bash
pnpm i -D prettier-plugin-svelte
```

Update the `prettier.config.js`

```diff
...
plugins: [
  ...
+ 'prettier-plugin-svelte'
  ...
],
...
```

For Astro.

```bash
pnpm i -D prettier-plugin-astro
```

Update the `prettier.config.js`

```diff
...
plugins: [
  ...
+ 'prettier-plugin-astro'
  ...
],
overrides: [
  ...
+ {
+   files: '*.astro',
+   options: {
+     parser: 'astro',
+   },
+ },
  ...
],
...
```

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json` or add the above to the specified configuration file:

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

And then

```bash
pnpm i -D lint-staged simple-git-hooks # Or Husky.
```

Inspired by [antfu/eslint-config](https://github.com/antfu/eslint-config)
