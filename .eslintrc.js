module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'eslint-config-ali/vue'
  ],

  // extends: [
  //   'plugin:vue/vue3-recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:prettier/recommended',
  // ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ], // 强制连续空行的最大数量
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['state'] }
    ], // 不校验 vuex -> mutations -> state
    semi: 0, // 语句强制分号结尾
    'semi-spacing': [0, { before: false, after: true }] // 分号前后空格
  }
}
