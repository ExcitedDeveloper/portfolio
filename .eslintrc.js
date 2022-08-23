module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "space-before-function-paren": "off"
  }
}
