const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const next = require('eslint-config-next');

module.exports = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  next,
);
