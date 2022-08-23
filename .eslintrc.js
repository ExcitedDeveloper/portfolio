module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'react-app',
    'plugin:jsx-a11y/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/space-before-function-paren': 'off'
  }
}
