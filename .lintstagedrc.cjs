const checkESLint = "npm run lint";

const checkTypes =
  "eslint --fix --plugin tsc --rule 'tsc/config: [2, {configFile: ./tsconfig.json}]'";

module.exports = {
  "*.{js,jsx,ts,tsx}": [checkESLint, checkTypes],
};
