module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "@typescript-eslint/no-restricted-types",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-restricted-types": ["error"],
    "@typescript-eslint/no-restricted-types": ["error"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
