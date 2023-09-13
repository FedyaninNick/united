module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    "react/function-component-definition": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-console": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    quotes: ["error", "double"],
  },
};
