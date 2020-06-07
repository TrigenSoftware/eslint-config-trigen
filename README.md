# eslint-config-trigen

[![NPM version][npm]][npm-url]
[![Node version][node]][node-url]
[![Peer dependencies status][peer-deps]][peer-deps-url]
[![Dependencies status][deps]][deps-url]
[![Build status][build]][build-url]
[![Dependabot badge][dependabot]][dependabot-url]

[npm]: https://img.shields.io/npm/v/eslint-config-trigen.svg
[npm-url]: https://npmjs.com/package/eslint-config-trigen

[node]: https://img.shields.io/node/v/eslint-config-trigen.svg
[node-url]: https://nodejs.org

[peer-deps]: https://david-dm.org/TrigenSoftware/eslint-config-trigen/peer-status.svg
[peer-deps-url]: https://david-dm.org/TrigenSoftware/eslint-config-trigen?type=peer

[deps]: https://david-dm.org/TrigenSoftware/eslint-config-trigen.svg
[deps-url]: https://david-dm.org/TrigenSoftware/eslint-config-trigen

[build]: http://img.shields.io/travis/com/TrigenSoftware/eslint-config-trigen.svg
[build-url]: https://travis-ci.com/TrigenSoftware/eslint-config-trigen

[dependabot]: https://api.dependabot.com/badges/status?host=github&repo=TrigenSoftware/eslint-config-trigen
[dependabot-url]: https://dependabot.com/

Trigen's ESLint config.

## Install

```bash
npm i -D eslint-config-trigen
# or
yarn add -D eslint-config-trigen
```

## Configure

Create `.eslintrc` with next content:

```json
{
    "extends": "trigen"
}
```

### Additional configs

There are additional configs for specific language features:

| Config | Description |
|--------|-------------|
| trigen/react | Rules for ReactJS code. |
| trigen/commonjs | Rules for CommonJS code. |
| trigen/jest | Rules for Jest code. |
| trigen/typescript | Rules for TypeScript code. |
| trigen/typescript-requiring-type-checking | Rules for TypeScript code with type checking. |

Example:

```json
{
    "extends": [
        "trigen",
        "trigen/react",
        "trigen/typescript",
        "trigen/typescript-requiring-type-checking"
    ]
}
```
