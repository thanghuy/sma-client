// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "alias": {
        "map": [
          ["@src", "./src"],
          ["@assets", "./assets"]
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "latest"
    }
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/no-var-requires": "off"
  },
};
