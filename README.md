# commitlint-config-commandments
[![npm](https://img.shields.io/npm/v/commitlint-config-commandments)](https://www.npmjs.com/package/commitlint-config-commandments)
[![test](https://github.com/new-gods/commitlint-config-commandments/workflows/node/badge.svg)](https://github.com/new-gods/commitlint-config-commandments/actions?query=workflow%3Anode)

Shareable `commitlint` config enforcing Ten Commandments
of Git Commit Messages. Use it with [`@commitlint/cli`](https://npm.im/@commitlint/cli) and [`@commitlint/prompt-cli`](https://npm.im/@commitlint/prompt-cli).

## Getting Started
```bash
npm install --save-dev commitlint-config-commandments @commitlint/cli
echo "module.exports = {extends: ['commandments']};" > commitlint.config.js
```

Then for applying:
```bash
echo "Docs: Update README" | commitlint
```
