module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-var": "error",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "error",
    "prettier/prettier": "error",
    "import/no-duplicates": "error",
    "prefer-const": "warn",
    "prefer-arrow-callback": "warn",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        groups: [["external", "builtin"], "parent", ["index", "internal", "sibling"]],
        pathGroups: [
          {
            pattern: "react-dom",
            group: "external",
            position: "before",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  env: {
    node: true,
  },
};
