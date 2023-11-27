module.exports = {
  root: true,
  extends: [
    './node_modules/@dwarvesf/react-eslint-config',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['node_modules/'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    io: true,
    chrome: true,
  },
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: {
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/no-cycle': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'no-console' :'off',
        '@typescript-eslint/no-throw-literal': 'off',
      },
    },
    {
      // Add this override
      files: ['*.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
}
