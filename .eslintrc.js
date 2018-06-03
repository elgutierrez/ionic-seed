// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard'
  ],
  plugins: [
    'chai-friendly'
  ],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  globals: {
    "angular": false,
    "describe": false,
    "context": false,
    "before": false,
    "beforeEach": false,
    "after": false,
    "afterEach": false,
    "it": false,
    "expect": false,
    "sinon": false,
    "inject": false
  }
}
